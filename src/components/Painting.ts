import Vue from 'vue';
import { Painting } from '../models/painting';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class PaintingComponent extends Vue {

    @Prop() painting: Painting;

    data() {
        return {
            painting: this.painting
        };
    }
}
