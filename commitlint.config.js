module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation only changes
        'style', // Changes that do not affect the meaning of the code (white-space, formatting, etc)
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'chore', // Changes to the build process or auxiliary tools and libraries such as documentation generation
        'revert', // If the commit reverts a previous commit, it should begin with revert
      ],
    ],
  },
};
