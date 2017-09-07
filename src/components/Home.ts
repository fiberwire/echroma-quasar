import Vue from 'vue';
import Component from 'vue-class-component';

import {
  QIcon,
  QLayout,
  QList,
  QListHeader,
  QItem,
  QItemMain,
  QItemSide,
  QToolbar,
  QToolbarTitle,
} from 'quasar';

@Component({
  name: 'Home',
  components: {
    QIcon,
    QLayout,
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QItemSide,
    QToolbar,
    QToolbarTitle,
  }
})
export default class Home extends Vue {

}
