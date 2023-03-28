/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:compat/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/recommended",
        "plugin:svelte/recommended"
    ],
    plugins: [
        '@typescript-eslint',
        "compat",
        "deprecate",
        "import",
        "sonarjs",
        "unicorn",
    ],
    ignorePatterns: [
        "**/build/**",
        "**/node_modules/**", 
        "**/.svelte-kit/**", 
        "**/dist/**", 
        ".eslintrc.cjs", 
        "**/coverage/**"
    ],
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                project: './*/tsconfig.json'
            },
        }
    ],
    env: {
        browser: true,
        es2022: true,
        node: true
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: './*/tsconfig.json',
            },
        }
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: './*/tsconfig.json',
        extraFileExtensions: [".svelte"]
    },
    rules: {
        "no-constant-condition": "off",
        "array-bracket-spacing": ["error", "never"],
        "array-callback-return": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "camelcase": ["error", { "properties": "always" }],
        "complexity": ["error", 12],
        "default-case-last": "error",
        "eqeqeq": ["error", "always"],
        "import/default": "error",
        "import/extensions": "off", //["error", "ignorePackages", { "json": "always", "svg": "always", "ts": "never", "tsx": "never" }],
        "import/no-commonjs": "error",
        "import/no-self-import": "error",
        "import/no-named-as-default": "off",
        "import/no-unresolved": ["error", { "ignore": ["^\\$"] }],
        "import/no-useless-path-segments": "error",
        "import/order": [
            "warn", {
                "alphabetize": { "order": "asc", "caseInsensitive": true },
                "groups": ["type", "builtin", "external", "internal", "parent", "sibling", "index", "object"],
                "pathGroupsExcludedImportTypes": ["builtin"],
                "newlines-between": "always"
            }
        ],
        "linebreak-style": ["error", "unix"],
        "max-depth": ["error", 4],
        "max-lines": ["warn", { "max": 250, "skipComments": true, "skipBlankLines": true }],
        "max-params": ["error", 6],
        "new-cap": ["error", { "capIsNewExceptions": ["Router"] }],
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-eval": "error",
        "no-lone-blocks": "error",
        "no-mixed-operators": "error",
        "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
        "no-return-await": "error",
        "no-self-assign": "off",
        "no-self-compare": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-useless-concat": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "no-implicit-coercion": "error",
        "no-negated-condition": "error",
        "object-shorthand": ["error", "properties"],
        "operator-assignment": ["error", "always"],
        "prefer-const": ["error", { "destructuring": "all" }],
        "prefer-object-spread": "error",
        "prefer-spread": "error",
        "require-returns-description": "off",
        "semi-spacing": "error",
        "sonarjs/cognitive-complexity": "off",
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/no-nested-template-literals": "off",
        "spaced-comment": ["error", "always", { "markers": ["/"] }],
        "template-curly-spacing": "error",
        "unicorn/filename-case": ["error", { "cases": { "camelCase": true, "pascalCase": true } }],
        "unicorn/no-null": "off",
        "unicorn/no-array-reduce": "error",
        "unicorn/no-thenable": "off",
        "unicorn/prefer-at": "warn",
        "unicorn/no-useless-undefined": "off",
        "unicorn/numeric-separators-style": ["error", { "onlyIfContainsSeparator": true }],
        "unicorn/prefer-module": "off",
        "unicorn/no-new-array": "off",
        "unicorn/prefer-number-properties": "off",
        "unicorn/prefer-switch": "off",
        "unicorn/prefer-ternary": ["error", "only-single-line"],
        "unicorn/prevent-abbreviations": "off",
        "unicorn/switch-case-braces": ["error", "avoid"],
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/comma-dangle":  ["error", "never"],
        "@typescript-eslint/naming-convention": ["error", { "selector": "typeLike", "format": ["PascalCase"] }],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/no-confusing-void-expression": ["warn", { "ignoreArrowShorthand": true, "ignoreVoidOperator": true }],
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
        "@typescript-eslint/indent": ["warn", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "@typescript-eslint/object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/semi": ["error", "always", { "omitLastInOneLineBlock": true }],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: true }],
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/comma-spacing": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/prefer-nullish-coalescing": ["warn", { "ignoreTernaryTests": false, "ignoreConditionalTests": false, "ignoreMixedLogicalExpressions": false }],
        "svelte/require-optimized-style-attribute": "error",
        "svelte/html-closing-bracket-spacing": ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        "svelte/html-quotes": "error",
        "svelte/html-self-closing": "error",
        "svelte/indent": ["warn", {
            "indent": 4,
            "switchCase": 2,
        }],
        "svelte/mustache-spacing": "error",
        "svelte/no-extra-reactive-curlies": "error",
        "svelte/no-spaces-around-equal-signs-in-attribute": "error",
        "svelte/prefer-class-directive": "error",
        "svelte/prefer-style-directive": "error",
        "svelte/shorthand-attribute": "error",
        "svelte/shorthand-directive": "error",
        "svelte/no-at-html-tags": "off",
        "svelte/valid-prop-names-in-kit-pages": "error",
        "svelte/require-store-reactive-access": "error",
        "svelte/block-lang": ["error", { "script": "ts", "style": ["postcss, scss"] }],
    },
};
