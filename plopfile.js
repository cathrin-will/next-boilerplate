module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Add a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'ui/components/{{camelCase name}}/index.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'ui/components/{{camelCase name}}/{{camelCase name}}.module.scss',
                templateFile: 'plop-templates/component/component.scss.hbs',
            },
            {
                type: 'add',
                path: 'ui/components/{{camelCase name}}/{{camelCase name}}.stories.tsx',
                templateFile: 'plop-templates/component/component.stories.hbs',
            },
            {
                type: 'add',
                path: 'ui/components/{{camelCase name}}/{{camelCase name}}.test.tsx',
                templateFile: 'plop-templates/component/component.test.hbs',
            },
        ],
    })
}
