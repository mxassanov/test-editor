export const buttons = [
  {
    icon: 'arrow-down-left',
    desc: 'Отменить',
    action: 'undo',
  },
  {
    icon: 'arrow-down-right',
    desc: 'Вперёд',
    action: 'redo',
  },
  {
    icon: 'format-text',
    desc: 'Заголовок блока',
    action: 'formatBlock',
    val: 'h2'
  },
  {
    icon: 'paragraph',
    desc: 'Абзац',
    action: 'insertParagraph',
  },
  {
    icon: 'folder-image',
    desc: 'Вставить изображение',
    action: 'insertImage',
    val: 'https://unsplash.com/photos/H6Zag57qs5Y/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTU1fHxtb25rZXlzfGVufDB8fHx8MTYzODcxNDMzOA&force=true&w=1920'
  },
  {
    label: 'Скопировать HTML',
    action: 'copy',
  },
]
