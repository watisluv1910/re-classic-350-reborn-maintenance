
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Royal Enfield",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "watisluv1910.github.io/re-classic-350-reborn-maintenance",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Ubuntu",
        code: "Andale Mono",
        body: "Ubuntu",
      },
      colors: {
        lightMode: {
          light: "#ebe6e0",       // Parchment – soft off-white background
          lightgray: "#f9d9b1",   // Soft Apricot – warm, subtle borders
          gray: "#b89a80",        // Taupe (added) – medium neutral for heavier borders and graph links
          darkgray: "#5a402b",    // Dark brown (derived from Dark Coffee) – body text, good contrast
          dark: "#422b19",        // Dark Coffee – headers and icons
          secondary: "#195e5c",   // Stormy Teal – links and current graph node
          tertiary: "#dcaf81",    // Sandy Clay – hover states and visited graph nodes
          highlight: "rgba(25, 94, 92, 0.1)", // Stormy Teal at 10% – subtle background for internal links, code highlights
          textHighlight: "#fbe5b0cc" // Light apricot (added) with 80% opacity – markdown highlighter effect
        },
        darkMode: {
          light: "#422b19",          // Dark Coffee – deep, warm page background
          lightgray: "#d9b594",      // Light Sandy Clay (derived) – subtle borders
          gray: "#b99e82",           // Warm Gray (added) – graph links and heavier borders
          darkgray: "#ebe6e0",       // Parchment – body text (light beige)
          dark: "#f9d9b1",           // Soft Apricot – headers and icons
          secondary: "#33a5a2",      // Bright Teal (lightened Stormy Teal) – links, current graph node
          tertiary: "#dcaf81",       // Sandy Clay – hover states, visited graph nodes
          highlight: "rgba(51,165,162,0.2)", // Bright Teal at 20% – background for internal links, code highlights
          textHighlight: "rgba(249,217,177,0.4)" // Soft Apricot at 40% – markdown highlighter effect
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks()
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
