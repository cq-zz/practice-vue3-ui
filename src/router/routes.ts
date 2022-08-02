export const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import(`../../packages/Button/docs/README.md`),
},
{
    title: '开关',
    name: 'Switch',
    path: '/components/Switch',
    component: () => import(`../../packages/Switch/docs/README.md`),
},
{
    title: '单选',
    name: 'Radio',
    path: '/components/Radio',
    component: () => import('../../packages/Radio/docs/README.md'),
}];