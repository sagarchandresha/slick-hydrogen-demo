import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen()],
  optimizeDeps: {
    include: ['@ant-design/react-slick'],
  },
});
