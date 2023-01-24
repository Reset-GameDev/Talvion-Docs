---
title: Markdown Examples
description: This page contains some examples of Markdown syntax.
---

## Syntax highlighting

    ```jsx title="src/components/Hello.js"
        import React from "react";
        import Layout from "@theme/Layout";

        export default function MyReactPage() {
        return (
            <Layout>
            <h1>My React page</h1>
            <p>This is a React page</p>
            </Layout>
        );
        }
    ```

```jsx title="src/components/Hello.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

## npm / yarn

    ```bash npm2yarn
    npm init
    ```

```bash npm2yarn
npm init
```

## Notifications

    :::tip My tip

    Use this awesome feature option

    :::

    :::info My tip

    Use this awesome feature option

    :::

    :::caution My tip

    Use this awesome feature option

    :::

    :::note My tip

    Use this awesome feature option

    :::

    :::danger My tip

    Use this awesome feature option

    :::

:::tip My tip

Use this awesome feature option

:::

:::info My tip

Use this awesome feature option

:::

:::caution My tip

Use this awesome feature option

:::

:::note My tip

Use this awesome feature option

:::

:::danger My tip

Use this awesome feature option

:::

## Code blocks highlighting

    ```md title="docs/hello.md" {1-4}
    ---
    sidebar_label: "Hi!"
    sidebar_position: 3
    ---

    # Hello

    This is my **first document**!
    ```

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **first document**!
```

---

    ```md title="docs/hello.md" {2-3,6,8}
    ---
    sidebar_label: "Hi!"
    sidebar_position: 3
    ---

    # Hello

    This is my **second document**!
    ```

```md title="docs/hello.md" {2-3,6,8}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **second document**!
```

## Links

    Markdown text with [links](/docs/Talvion).

Markdown text with [links](/docs/Talvion).

## Images

You can use absolute paths to reference images in the static directory (`static/img/img_favicon.png`):

```md
![logo](/img/img_favicon.png)
```

![logo](/img/img_favicon.png)
