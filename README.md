![](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

# Vue.js Voyagers 🪐 Gamified Travel SPA with D3.js and Web Audio

<p align="center">
  <a target="_blank" href="https://neodigm.github.io/vue_voyagers/index.html">
  <img src="https://neodigm.github.io/vue_voyagers/vuejs_space_travel_app.png" title="Vue JavaScript with D3.js 🍰 Branded 👁️ Candy 🎨">
  </a>
</p>

[Vue.js D3.js Star Wars programming challenge](https://neodigm.github.io/vue_voyagers/index.html) 

[Vue.js D3.js Star Wars Responsive view](https://www.thescottkrause.com/utils/neodigm55-mobile-resizer/?vp=m&uri=https://neodigm.github.io/vue_voyagers/index.html) 

[Vue.js D3.js Star Wars LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:6533433750137778176)

[Vue.js D3.js Star Wars Tweet](https://twitter.com/hashtag/neodigm24?src=hash&amp;ref_src=twsrc%5Etfw)

# Client Requirements:

Use Vue.js and [Advanced JavaScript](https://thescottkrause.com/tags/javascript/)

Use https://swapi.co/ API for your data.  (http://stapi.co/api/)

Display a list of Voyagers (characters) and some of their stats.

Display a selectable list of starships.

Create the ability to assign selected voyagers to a starship to create a Voyage.

Have the ability to assign a captain.

Add any other interactive [data visualization](https://www.thescottkrause.com/emerging_tech/cytoscape_dataviz_skills/) ideas you think this UI might benefit from.

```javascript
  watch: {  //  Fly the Unfriendly Skies
      RESTCount : function(){  //  All JSON have been received
          const NUM_COMPLETE = 4, NUM_NOT_COMPLETE_ONE = 1, NUM_NOT_COMPLETE_TWO = 2;
          if( this.RESTCount === NUM_NOT_COMPLETE_ONE ) snck.q("Loading ...");
          if( this.RESTCount === NUM_NOT_COMPLETE_TWO ){
              if( this.one2ten() >= 6 ) snck.q("Please Wait ...");
          }
          if( this.RESTCount === NUM_COMPLETE ) this.RESTPost();  //  Init Sort and Gen Rank
      },
      aPeopleSel: function(){
        var that = this;
        d3.select(".visual__data--species").selectAll("div").remove(); // Change color by value, rnd if 1
        d3.select(".visual__data--species") //  d3.js dynamic charting (d3js.org) (http://circos.ca/)
        .selectAll("div")
            .data( this.aPeopleSel_species )
        .enter().append("div")
            .style("width", function( d ) { return d.value * 28 + 84 + "px"; })
            .attr("class", function(d) { 
                var colorClass = ( d.value == 1 ) ?  that.one2ten() : d.value;
                return "visual__data--bg" + colorClass; })
            .text(function( d ) { return ( d.label + " | " + d.value ); });
      },
      aShps: function(){
          if( this.aShps.length == 2 ){ a55Rev.autoOpen("js-rev__splash--id"); }
      }
  }
```

<p align="center">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvv.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvu.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vve.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvperiod.svg" width="22" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvj.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvs.svg" width="33" alt="Vivid Vector Skulduggery">
</p>
<p align="center">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvd.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vv3.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvperiod.svg" width="22" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvj.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvs.svg" width="33" alt="Vivid Vector Skulduggery">
</p>
<p align="center">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvw.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vve.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvb.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvspace.svg" width="22" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vva.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvu.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvd.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvi.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvo.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvspace.svg" width="22" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vva.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvp.svg" width="33" alt="Vivid Vector Skulduggery">
<img src="https://neodigm.github.io/vivid_vector_alphabet/wasm/vvi.svg" width="33" alt="Vivid Vector Skulduggery">
</p>

#
[Portfolio Blog](https://www.theScottKrause.com) |
[🦄 Résumé](https://thescottkrause.com/Arcanus_Scott_C_Krause_2020.pdf) |
[NPM](https://www.npmjs.com/~neodigm) |
[Github](https://github.com/neodigm) |
[LinkedIn](https://www.linkedin.com/in/neodigm55/) |
[Gists](https://gist.github.com/neodigm?direction=asc&sort=created) |
[Salesforce](https://trailblazer.me/id/skrause) |
[Code Pen](https://codepen.io/neodigm55) |
[Machvive](https://machvive.com/) |
[Arcanus 55](https://www.arcanus55.com/) |
[Repl](https://repl.it/@neodigm) |
[Twitter](https://twitter.com/neodigm24) |
[Keybase](https://keybase.io/neodigm) |
[Docker](https://hub.docker.com/u/neodigm) |
[W3C](https://www.w3.org/users/123844)
#

<p align="center">
  <a target="_blank" href="https://thescottkrause.com/d3_datavis_skills.html">
  <img src="https://repository-images.githubusercontent.com/178555357/2b6ad880-7aa0-11ea-8dde-63e70187e3e9" title="D3js Skills with Audio">
  </a>
</p>
