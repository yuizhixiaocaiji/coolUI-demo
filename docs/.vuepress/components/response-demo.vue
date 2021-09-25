<template>
  <div class="response-wrapper">
    <g-row class="row">
      <g-col class="item"
             span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
        col
      </g-col>
      <g-col class="item"
             span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        col
      </g-col>
    </g-row>
  </div>
</template>

<script>
import Col from '../../../src/col'
import Row from '../../../src/row'
export default {
  components: {
    'g-col': Col,
    'g-row': Row
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/helper";
.response-wrapper { padding-top: $wrapper-top;
  > .row {
    > .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }
}
</style>