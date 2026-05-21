import { openai } from '../utils/openai.js';
import { getOrCreateThread, runAssistant } from '../utils/threadManager.js';

const MAIN_AGENT_ID = process.env.MAIN_AGENT_ID;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { message, sessionId = 'default' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Falta el mensaje' });
    }

    if (!MAIN_AGENT_ID) {
      return res.status(500).json({ error: 'MAIN_AGENT_ID no configurado' });
    }

    const threadId = await getOrCreateThread(sessionId, openai);
    const reply = await runAssistant(threadId, MAIN_AGENT_ID, message, openai);

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Error en /api/chat:', err);
    return res.status(500).json({ error: 'Error interno', details: err.message });
  }
}
