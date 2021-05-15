# Inform that you will need the Cloudflare Workers CLI, "wrangler"
echo 'You will need the Cloudflare Workers CLI, "wrangler", for the following steps...'

# Create KV namespaces
wrangler kv:namespace create "TRIPLECHECK"
wrangler kv:namespace create "TRIPLECHECK_PREVIEW" --preview

echo "Now set the above KV namespace bindings in 'wrangler.toml', then go ahead and publish your Worker with 'npm run deploy'!"