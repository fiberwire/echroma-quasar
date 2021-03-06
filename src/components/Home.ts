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
  QSideLink
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
    QSideLink
  }
})
export default class Home extends Vue {

  $refs: {
    layout: any // couldn't find name QLayout for some reason
  };

  public newPainting() {
    this.$refs.layout.hideCurrentSide(() => {
      this.$router.push(`painting/new`);
    });
  }
}
