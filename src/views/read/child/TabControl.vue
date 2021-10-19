<template>
  <div class="tabControl">
    <div
      class="tabControl-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
      v-for="(item, index) in titles"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    // ...mapState("read", ["currentIndex"]),
  },
  methods: {
    // ...mapMutations("read", ["SetCurrentIndex"]),
    tabClick(index) {
      // this.SetCurrentIndex({index})
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .tabControl-item {
    flex: 25%!important;
    text-align: center;
    cursor: pointer;
    line-height: 35px;
  }
}
.tabControl {
  display: flex;
  background-color: #fff;
  z-index: 20;
  margin-top: 20px;
  flex-wrap: wrap;
}
.tabControl-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  line-height: 35px;
}

.active {
  color: rgb(74, 179, 68);
}
</style>
