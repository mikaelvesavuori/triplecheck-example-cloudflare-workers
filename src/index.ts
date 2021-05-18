import { CloudflareKvRepository } from 'triplecheck-repository-cloudflarekv';
import { TripleCheckBroker } from 'triplecheck-broker';

/**
 * @description Basic implementation of TripleCheck broker with the Cloudflare KV repository, using Cloudflare Workers as the platform.
 */
async function handler(req: any) {
  const repository = CloudflareKvRepository();

  const { body, method } = req;
  const { pathname, search } = new URL(req.url);

  let payload: any = null;
  if (process.env.NODE_ENV === 'local') payload = body;
  else payload = body ? await req.json() : null;

  const request: any = {
    method,
    pathname,
    search
  };

  const { responseData, status, headers } = await TripleCheckBroker(request, payload, repository);

  return new Response(JSON.stringify(responseData), { status, headers });
}

addEventListener('fetch', (event) => event.respondWith(handler(event.request)));
