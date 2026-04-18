import type { Config } from "@react-router/dev/config";
import { projectSlugs } from "./app/content";

export default {
  appDirectory: "app",
  ssr: true,
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...projectSlugs.map((slug) => `/${slug}`),
    ];
  },
} satisfies Config;
