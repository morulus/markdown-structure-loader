markdown-structure-loader
==

Webpack loader which load markdown structure

Heading 2
--

### Heading 3

#### Heading 4 with `code`

##### Heading 5

##### Heading 4 again

###### Heading 6

## Heading 2 again

# Last heading 1

Will give:

```json
[
  {
    "heading": "markdown-structure-loader",
    "depth": 1,
    "children": [
      {
        "heading": "Heading 2",
        "depth": 2,
        "children": [
          {
            "heading": "Heading 3",
            "depth": 3,
            "children": [
              {
                "heading": "Heading 4 with code",
                "depth": 4,
                "children": [
                  {
                    "heading": "Heading 5",
                    "depth": 5,
                    "children": []
                  },
                  {
                    "heading": "Heading 4 again",
                    "depth": 5,
                    "children": [
                      {
                        "heading": "Heading 6",
                        "depth": 6,
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "heading": "Heading 2 again",
        "depth": 2,
        "children": []
      }
    ]
  },
  {
    "heading": "Last heading 1",
    "depth": 1,
    "children": []
  }
]
```

Options
--

- `getAst` Keep original AST value of heading

Author and license
--

Morulus <vladimirmorulus@gmail.com>

Under [MIT](./LICENSE) license, 2019
