module.exports = {
    extends: [
        'plugin:prettier/recommended',
    ],
    plugins: [
        "prettier", 
        "@typescript-eslint"
    ],
    overrides: [
        {
          files: ["*.ts", "*.tsx"],
          rules: {
            "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    
            "prettier/prettier": "error",
            "no-duplicate-case": "error",
            "no-duplicate-imports": "error",
    
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
    
            "import/order": [
              "error",
              {
                groups: [
                  "builtin",
                  "external",
                  "internal",
                  "parent",
                  "sibling",
                  "index"
                ],
                "newlines-between": "always"
              }
            ]
          }
        },
        {
          files: ["*.js"],
          rules: {
            "prettier/prettier": "error"
          }
        },
        {
          files: ["*.md", "*.mdx"],
          rules: {
            "prettier/prettier": "off"
          }
        },
        {
          files: ["*.json"],
          rules: {
            "prettier/prettier": "off",
            "quotes": ["error", "double"],
            "comma-dangle": ["error", "always-multiline"],
            "quote-props": ["error", "as-needed"]
          }
        }
    ]
}