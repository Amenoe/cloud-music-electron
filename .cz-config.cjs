module.exports = {
  types: [
    {
      value: '✨feat',
      name: '✨feat: 新增功能'
    },
    {
      value: '🐛fix',
      name: '🐛fix: 修复bug'
    },
    {
      value: '📝: docs',
      name: '📝docs: 文档变更'
    },
    {
      value: '💎style',
      name: '💎style: 代码格式化'
    },
    {
      value: '🔂refactor',
      name: '🔂refactor: 功能重构'
    },
    {
      value: '🚀perf',
      name: '🚀perf: 性能优化'
    },
    {
      value: '🚨test',
      name: '🚨test: 测试编码'
    },
    {
      value: '⏪revert',
      name: '⏪revert: 代码回退'
    },
    {
      value: '📦build',
      name: '📦build: 打包'
    },
    {
      value: '👷ci',
      name: '👷ci: 更改持续集成'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    scope: '请输入文件修改范围(可选)',
    customScope: '请输入自定义的 scope:',
    subject: '请简要描述修改内容(必填)',
    body: '请详细描述修改内容,多条可用"|"拆分(可选) \n',
    breaking: '请列出非兼容性重大的变更 BREAKING CHANGES(可选) \n',
    footer: '请列出修复并关闭的issue(可选),例如: #25, #100',
    confirmCommit: '确定提交信息内容吗？'
  },
  scopes: [
    ['config', '基础配置'],
    ['components', '组件模块'],
    ['pages', '调整页面'],
    ['services', '调整服务'],
    ['router', '路由工具'],
    ['utils', 'utils 相关'],
    ['styles', '样式调整'],
    ['hooks', 'hooks管理'],
    ['other', '其他']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),
  allowBreakingChanges: ['✨feat', '🐛fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72 // 摘要字符长度限制
}
