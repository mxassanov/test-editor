import { createApp } from 'vue'
import App from './App.vue'
import('./assets/css/styles.css')

const app = createApp(App)

// Icons
import ArrowDownLeft from 'vue-material-design-icons/ArrowUDownLeft.vue'
import ArrowDownRight from 'vue-material-design-icons/ArrowUDownRight.vue'
import FormatText from 'vue-material-design-icons/FormatText.vue'
import Paragraph from 'vue-material-design-icons/Parking.vue'
import FolderImage from 'vue-material-design-icons/FolderImage.vue'
app.component('arrow-down-left', ArrowDownLeft)
app.component('arrow-down-right', ArrowDownRight)
app.component('format-text', FormatText)
app.component('paragraph', Paragraph)
app.component('folder-image', FolderImage)

app.mount('#app')
