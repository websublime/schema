import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'WebSublime Schema',
  description: 'Schema validation model',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/websublime/schema' }
      // { text: 'Concepts', link: '/Concepts' }
    ],
    sidebar: {
      '/guide/': getGuideSidebar()
      // '/concepts/': getConceptsSidebar()
    }
  }
});

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is Schema?', link: '/guide/' },
        { text: 'Getting started', link: '/guide/getting-started' },
        { text: 'Schema types', link: '/guide/schema-types' },
        { text: 'Object schema type', link: '/guide/object-type' },
        { text: 'Array schema type', link: '/guide/array-type' }
      ]
    }
    // {
    //   text: 'Concepts',
    //   children: [
    //     { text: 'Nest Object', link: '/concepts/objects' },
    //     { text: 'Nest Array', link: '/concepts/arrays' },
    //     {
    //       text: 'Create custom validation',
    //       link: '/concepts/custom-validation'
    //     },
    //     { text: 'Error messages', link: '/concepts/error-messages' },
    //     { text: 'API Reference', link: '/api/' }
    //   ]
    // }
  ];
}

function getConceptsSidebar() {
  return [
    {
      text: 'Concepts',
      children: [
        {
          text: 'Javascript object vs Validation schema object',
          link: '/concepts/index.md'
        },
        {
          text: 'Base type validation',
          link: '/concepts/base-type-validation'
        },
        { text: 'Validation rules', link: '/concepts/rules' },
        { text: 'Validation', link: '/concepts/validation' },
        { text: 'Error messages', link: '/concepts/error messages' },
        { text: 'Forms', link: '/concepts/forms' }
      ]
    }
  ];
}
