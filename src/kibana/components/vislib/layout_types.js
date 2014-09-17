define(function (require) {
  return function LayoutTypeFactory(Private) {
    // visLib layout types
    return {
      histogram: Private(require('components/vislib/components/layouts/types/column_layout')),
      pie: Private(require('components/vislib/components/layouts/types/pie_layout'))
    };
  };
});