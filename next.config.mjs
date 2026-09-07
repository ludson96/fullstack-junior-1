/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // No Windows, o PackFileCacheStrategy em disco (.pack.gz) frequentemente sofre
      // conflito de lock/ENOENT quando o watcher atualiza arquivos rapidamente.
      config.cache = {
        type: 'memory',
      };
    }
    return config;
  },
};

export default nextConfig;
