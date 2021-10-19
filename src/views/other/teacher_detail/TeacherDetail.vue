<template>
  <div ref="teacherDetail" class="teacher-detail">
    <top-base-info :basic-info="basicInfo"></top-base-info>
    <center-base-info
      :synopsis-content="synopsisContent"
      :pic="pic"
      :basic-info="basicInfo"
      :t-id="getTid"
      :main-content-height="mainContentHeight"
      :skill="skill"
    >
    </center-base-info>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { GetTeacherDetail } from "../../../network/advisory";
import topBaseInfo from "./child/topBaseInfo";
import centerBaseInfo from "./child/centerBaseInfo";
import MyFooter from "../../../components/content/footer/MyFooter";
export default {
  name: "TeacherDetail",
  data() {
    return {
      teacherId: 0,
      basicInfo: {},
      skill: {},
      pic: [],
      synopsisContent: "",
      mainContentHeight: 0,
    };
  },
  components: {
    topBaseInfo,
    centerBaseInfo,
    MyFooter,
  },
  computed: {
    getTid() {
      return Number(this.teacherId);
    },
  },

  created() {
    window.scrollTo(0,0)
    const title = this.$route.query.details;
    document.title = title;
    this.teacherId = this.$route.query.id;
    this.GetTeacherDetail(this.teacherId);
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0,0)
      const title = this.$route.query.details;
      this.teacherId = this.$route.query.id;
      this.GetTeacherDetail(this.teacherId);
    },
  },
  methods: {
    GetTeacherDetail(id) {
      GetTeacherDetail(id).then((res) => {
        console.log(res);
        this.basicInfo = res.data.basicInfo;
        this.skill = res.data.extJson;
        this.pic = res.data.pics2;
        this.synopsisContent = res.data.content;
      });
    },
  },
  mounted() {
    // this.$nextTick(()=>{
    //   this.mainContentHeight=this.$refs.teacherDetail.offsetHeight
    //   console.log(this.mainContentHeight)
    // })
  },
  updated() {
    this.mainContentHeight = this.$refs.teacherDetail.offsetHeight;
  },
};
</script>

<style scoped>
.teacher-detail {
  padding-top: 3.75rem;
}
</style>
