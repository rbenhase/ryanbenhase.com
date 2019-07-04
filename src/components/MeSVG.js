import React from "react"
import { Waypoint } from 'react-waypoint';

class MeSVG extends React.Component {

  constructor(props) {
    super(props);
    this.state = {assembled:true}
  }

  handleWaypointEnter = () => {
    this.setState({assembled:true});
  }

  handleWaypointLeave= () => {
    this.setState({assembled:false});
  }


  render() {
    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        topOffset="70%"
        fireOnRapidScroll={false}
      >
        <div className={this.state.assembled ? "svg-ryan ryan-assembled" : "svg-ryan ryan-scattered"}>

          <svg version="1.1" id="Layer_6" x="0px" y="0px" preserveAspectRatio="xMidYMid meet" width="100%"
               height="100%" viewBox="0 0 1098 1040.67"
               style={{maxWidth: "100%", maxHeight: "100%", enableBackground: "new 0 0 1098 1040.67"}}>
            <path className="rb0 t1" d="M438,953.67"/>
            <polygon id="XMLID_12_" className="rb1" points="801,584.67 777,599.67 798,596.67 "/>
            <polyline className="rb2" points="798,596.67 783,620.67 777,599.67 798,596.67 "/>
            <polygon className="rb3  t1" points="777,599.67 777,617.67 783,620.67 "/>
            <path className="rb4" d="M642,773.67"/>
            <polygon className="rb5" points="705,749.67 708,779.67 681,770.67 "/>
            <polyline id="XMLID_11_" className="rb6" points="768,647.67 765,626.67 759,650.67 768,647.67 "/>
            <polygon className="rb7" points="798,596.67 783,620.67 792,623.67 "/>
            <polygon className="rb8" points="792,623.67 783,620.67 780,650.67 "/>
            <polygon className="rb9  t1" points="783,620.67 780,650.67 768,647.67 "/>
            <polygon className="rb10" points="768,647.67 780,650.67 759,650.67 "/>
            <polyline className="rb11" points="753,629.67 759,650.67 741,677.67 753,629.67 "/>
            <polygon className="rb12" points="759,650.67 741,677.67 780,650.67 "/>
            <polygon className="rb13" points="780,650.67 741,677.67 735,719.67 "/>
            <polyline className="rb14  t1" points="741,677.67 735,719.67 720,722.67 741,677.67 "/>
            <polygon className="rb15" points="735,719.67 720,722.67 720,758.67 "/>
            <polyline className="rb16" points="720,722.67 705,749.67 720,758.67 720,722.67 "/>
            <polygon className="rb17" points="720,758.67 705,749.67 708,779.67 "/>
            <polygon className="rb17" points="708,779.67 681,770.67 687,794.67 "/>
            <polygon className="rb18" points="687,794.67 663,800.67 681,770.67 "/>
            <polygon className="rb19 t1" points="681,770.67 663,800.67 657,776.67 "/>
            <polygon className="rb20" points="657,776.67 663,800.67 642,773.67 "/>
            <polygon className="rb21 t1" points="663,800.67 642,773.67 627,794.67 "/>
            <polyline className="rb22" points="618,731.67 642,773.67 621,788.67 618,731.67 "/>
            <path className="rb23" d="M621,788.67c7-5,14-10,21-15l-15,21L621,788.67"/>
            <path className="rb24" d="M735,470.67"/>
            <polyline className="rb25" points="729,476.67 729,470.67 693,446.67 729,476.67 "/>
            <polyline className="rb26" points="729,476.67 693,446.67 699,476.67 729,476.67 "/>
            <polyline className="rb27 t1" points="699,476.67 729,476.67 702,497.67 699,476.67 "/>
            <polyline className="rb28" points="729,491.67 702,497.67 729,476.67 729,491.67 "/>
            <path className="rb28" d="M711,503.67"/>
            <polyline className="rb29" points="702,497.67 729,491.67 705,503.67 702,497.67 "/>
            <path className="rb30" d="M729,476.67"/>
            <polyline className="rb30" points="702,509.67 705,503.67 729,491.67 702,509.67 "/>
            <polygon className="rb31" points="732,512.67 732,512.78 735,548.67 702,509.67 "/>
            <polyline className="rb32" points="702,509.67 696,530.67 735,548.67 702,509.67 "/>
            <polyline className="rb33" points="735,548.67 693,551.67 696,530.67 735,548.67 "/>
            <polyline className="rb34 t1" points="693,551.67 735,548.67 729,572.67 693,551.67 "/>
            <polygon className="rb35" points="735,548.67 729,572.67 744,563.67 741.1,557.81 "/>
            <polyline className="rb36" points="729,572.67 693,551.67 681,563.67 729,572.67 "/>
            <polyline className="rb37" points="681,563.67 729,572.67 696,581.67 681,563.67 "/>
            <polyline className="rb38" points="696,581.67 729,572.67 711,590.67 696,581.67 "/>
            <polygon className="rb39" points="744,563.67 729,572.67 747,566.67 "/>
            <polygon className="rb40" points="747,566.67 729,572.67 750,578.67 "/>
            <polygon className="rb41 t1" points="750,578.67 750,593.67 729,572.67 "/>
            <polygon className="rb42" points="750,593.67 729,572.67 735,608.67 "/>
            <polygon className="rb43" points="729,572.67 735,608.67 711,590.67 "/>
            <polyline className="rb44" points="735,608.67 750,623.67 729,632.67 735,608.67 "/>
            <polyline className="rb45" points="720,614.67 729,632.67 735,608.67 720,614.67 "/>
            <polyline className="rb46" points="711,590.67 735,608.67 720,614.67 711,590.67 "/>
            <polyline className="rb47" points="714,614.67 711,590.67 720,614.67 714,614.67 "/>
            <polyline className="rb48" points="714,614.67 720,614.67 720,623.67 714,614.67 "/>
            <polyline className="rb49 t1" points="729,632.67 720,614.67 720,623.67 729,632.67 "/>
            <polyline className="rb50" points="708,611.67 720,623.67 714,614.67 708,611.67 "/>
            <polyline className="rb51" points="702,599.67 708,611.67 711,590.67 702,599.67 708,611.67 "/>
            <polyline className="rb52" points="696,581.67 711,590.67 702,599.67 696,581.67 "/>
            <polygon className="rb53" points="714,614.67 708,611.67 711,590.67 "/>
            <polyline className="rb54 t1" points="696,581.67 702,599.67 693,596.67 696,581.67 702,599.67 "/>
            <polyline className="rb55" points="696,581.67 693,596.67 687,596.67 696,581.67 "/>
            <polyline className="rb56" points="720,686.67 717,674.67 729,674.67 "/>
            <polyline className="rb57" points="717,662.67 729,674.67 717,674.67 717,662.67 "/>
            <path className="rb58" d="M717,662.67"/>
            <polyline className="rb58" points="699,674.67 705,671.67 717,674.67 699,674.67 705,671.67 "/>
            <polyline className="rb59" points="711,665.67 714,665.67 717,674.67 711,665.67 "/>
            <polyline className="rb60" points="705,671.67 717,674.67 711,665.67 705,671.67 "/>
            <polyline className="rb61" points="714,665.67 717,674.67 717,662.67 714,665.67 "/>
            <path className="rb62" d="M705,671.67"/>
            <polyline className="rb62" points="699,674.67 717,674.67 720,686.67 699,674.67 "/>
            <polyline className="rb63" points="720,686.67 699,674.67 708,695.67 720,686.67 "/>
            <polyline className="rb64 t1" points="699,674.67 708,695.67 699,698.67 699,674.67 "/>
            <polyline className="rb65" points="699,674.67 699,698.67 675,698.67 699,674.67 "/>
            <polyline className="rb66" points="699,674.67 675,698.67 684,677.67 699,674.67 "/>
            <line className="rb67" x1="660" y1="668.67" x2="657" y2="662.67"/>
            <path className="rb67" d="M660,668.67"/>
            <polyline className="rb68" points="624,635.67 654,647.67 654,644.67 624,635.67 "/>
            <polyline className="rb69" points="675,653.67 654,644.67 654,647.67 663,650.67 "/>
            <polygon className="rb70" points="663,650.67 669,656.67 675,653.67 "/>
            <polyline className="rb71" points="657,662.67 660,668.67 645,662.67 657,662.67 "/>
            <polygon className="rb67" points="684,677.67 639,662.67 645,662.67 "/>
            <polyline className="rb72" points="684,677.67 660,668.67 657,662.67 684,677.67 "/>
            <polyline className="rb73" points="675,653.67 657,662.67 684,677.67 675,653.67 "/>
            <polyline className="rb74 t1" points="675,653.67 684,677.67 684,653.67 675,653.67 "/>
            <polyline className="rb75" points="684,653.67 699,674.67 702,659.67 684,653.67 "/>
            <polyline className="rb76" points="684,653.67 702,653.67 702,659.67 684,653.67 "/>
            <polyline className="rb77" points="684,653.67 699,674.67 684,677.67 684,653.67 "/>
            <polygon className="rb78" points="699,674.67 702,659.67 705,671.67 "/>
            <polygon className="rb79" points="705,671.67 702,659.67 711,665.67 "/>
            <polyline className="rb80" points="711,665.67 702,659.67 702,653.67 711,665.67 "/>
            <polyline className="rb81" points="711,665.67 702,653.67 711,650.67 711,665.67 "/>
            <polyline className="rb82" points="720,644.67 702,653.67 711,650.67 720,644.67 "/>
            <polyline className="rb83" points="714,665.67 720,644.67 711,650.67 714,665.67 "/>
            <polygon className="rb84 t1" points="711,665.67 714,665.67 711,650.67 "/>
            <polygon className="rb85" points="714,665.67 720,644.67 717,662.67 "/>
            <polyline className="rb86" points="720,644.67 723,650.67 717,662.67 720,644.67 "/>
            <polyline className="rb87" points="732,641.67 723,650.67 720,644.67 732,641.67 "/>
            <polyline className="rb88" points="729,674.67 723,650.67 732,641.67 729,674.67 "/>
            <polyline className="rb89" points="729,674.67 723,650.67 717,662.67 729,674.67 "/>
            <polyline className="rb90" points="744,629.67 732,641.67 729,674.67 744,629.67 "/>
            <polyline className="rb91" points="729,632.67 744,629.67 735,635.67 729,632.67 "/>
            <polyline className="rb92" points="729,632.67 750,623.67 744,629.67 729,632.67 "/>
            <polygon className="rb93" points="750,623.67 753,629.67 744,629.67 "/>
            <polyline className="rb94" points="729,674.67 744,629.67 753,629.67 729,674.67 "/>
            <polygon className="rb95" points="753,629.67 729,674.67 741,677.67 "/>
            <polygon className="rb96" points="729,674.67 720,686.67 741,677.67 "/>
            <polygon className="rb97 t1" points="741,677.67 720,686.67 720,722.67 "/>
            <polygon className="rb98" points="720,686.67 708,695.67 720,722.67 "/>
            <polyline className="rb99" points="699,698.67 708,695.67 720,722.67 699,698.67 "/>
            <polygon className="rb100 t1" points="720,722.67 699,728.67 699,698.67 "/>
            <polygon className="rb101" points="699,698.67 675,698.67 699,728.67 "/>
            <polyline className="rb102" points="675,698.67 699,728.67 657,722.67 675,698.67 "/>
            <polyline className="rb103" points="645,689.67 675,698.67 657,722.67 645,689.67 "/>
            <polygon className="rb104 t1" points="657,722.67 618,731.67 645,689.67 "/>
            <polyline className="rb105" points="618,731.67 645,689.67 612,665.67 618,731.67 "/>
            <polyline className="rb106" points="579,653.67 612,665.67 579,653.67 618,731.67 612,665.67 "/>
            <path className="rb107" d="M636,668.67"/>
            <polygon className="rb108" points="684,677.67 675,698.67 639,662.67 "/>
            <polyline className="rb109" points="639,662.67 675,698.67 645,689.67 639,662.67 "/>
            <polyline className="rb110 t1" points="612,650.67 639,662.67 612,665.67 612,650.67 "/>
            <polygon className="rb111" points="639,662.67 645,689.67 612,665.67 "/>
            <polyline className="rb112" points="612,665.67 612,650.67 588,638.67 612,665.67 "/>
            <polygon className="rb113" points="612,650.67 588,638.67 600,641.67 "/>
            <polyline className="rb114" points="588,638.67 588,638.67 600,641.67 609,632.67 588,638.67 "/>
            <polyline className="rb115" points="588,638.67 579,653.67 612,665.67 588,638.67 "/>
            <polyline className="rb116" points="594,629.67 609,632.67 588,638.67 594,629.67 "/>
            <polyline className="rb117" points="588,629.67 594,629.67 588,638.67 588,629.67 "/>
            <polyline className="rb118" points="579,653.67 585,629.67 588,638.67 579,653.67 "/>
            <polygon className="rb119" points="702,599.67 693,596.67 708,611.67 "/>
            <polyline className="rb120" points="687,596.67 693,596.67 708,611.67 687,596.67 "/>
            <polyline className="rb121" points="687,596.67 708,611.67 656.98,596.67 687,596.67 "/>
            <polyline className="rb122" points="657,596.67 657,596.67 657,596.67 642.02,593.67 708.02,611.67 657,596.67 "/>
            <polyline className="rb123" points="656.98,596.67 647.98,587.67 687,596.67 656.98,596.67 "/>
            <polyline className="rb124" points="647.98,587.67 644.98,578.67 687,596.67 647.98,587.67 644.98,578.67 "/>
            <polygon className="rb125" points="687,596.67 644.98,578.67 696,581.67 "/>
            <polyline className="rb126" points="644.98,578.67 645,566.67 696,581.67 644.98,578.67 "/>
            <polygon className="rb127" points="696,581.67 645,566.67 681,563.67 "/>
            <polyline className="rb128" points="645,566.67 660,560.67 681,563.67 645,566.67 "/>
            <polyline className="rb129" points="681,563.67 660,560.67 663,554.67 681,563.67 "/>
            <polyline className="rb130" points="663,554.67 681,563.67 672,554.67 663,554.67 "/>
            <polyline className="rb131" points="729,632.67 735,635.67 717,632.67 729,632.67 "/>
            <polyline className="rb132" points="735,635.67 717,632.67 714,638.67 735,635.67 "/>
            <polyline className="rb133" points="714,638.67 717,632.67 696,644.67 714,638.67 "/>
            <polyline className="rb134" points="696,644.67 717,632.67 678,632.67 696,644.67 "/>
            <polyline className="rb135" points="696,644.67 678,632.67 675,641.67 696,644.67 "/>
            <polyline className="rb136" points="678,632.67 675,641.67 666,638.67 678,632.67 "/>
            <polygon className="rb137" points="744,629.67 735,635.67 732,641.67 "/>
            <polygon className="rb138" points="735,635.67 714,638.67 732,641.67 "/>
            <polygon className="rb139" points="732,641.67 714,638.67 720,644.67 "/>
            <polygon className="rb140" points="720,644.67 714,638.67 702,653.67 "/>
            <polygon className="rb141" points="714,638.67 696,644.67 702,653.67 "/>
            <polygon className="rb142" points="702,653.67 696,644.67 675,653.67 "/>
            <polyline className="rb143" points="675,653.67 696,644.67 675,641.67 675,653.67 "/>
            <polygon className="rb144" points="675,641.67 666,638.67 675,653.67 "/>
            <polyline className="rb145" points="666,638.67 675,653.67 654,644.67 666,638.67 "/>
            <polyline className="rb146" points="678,632.67 636,629.67 666,638.67 678,632.67 "/>
            <polyline className="rb147" points="636,629.67 654,644.67 666,638.67 636,629.67 636,629.67 "/>
            <polyline className="rb148" points="636,629.67 678,632.67 654,626.67 636,629.67 636,629.67 "/>
            <polyline className="rb149" points="624,635.67 654,644.67 636,629.67 624,635.67 "/>
            <polyline className="rb150" points="624,635.67 636,629.67 615,623.67 624,635.67 "/>
            <polyline className="rb151" points="615,623.67 654,626.67 636,629.67 615,623.67 "/>
            <polyline className="rb152" points="615,623.67 594,629.67 624,635.67 615,623.67 585,629.67 "/>
            <polyline className="rb153" points="585,629.67 615,623.67 594,629.67 585,629.67 "/>
            <path className="rb154" d="M582,635.67"/>
            <polyline className="rb155" points="663,554.67 660,560.67 645,566.67 663,554.67 "/>
            <polyline className="rb156" points="609,590.67 534,605.67 663,554.67 609,590.67 "/>
            <polygon className="rb157" points="663,554.67 657,545.67 534,605.67 "/>
            <polygon className="rb158" points="609,590.67 645,566.67 621,596.67 "/>
            <polygon className="rb159" points="609,590.67 534,605.67 564,611.67 "/>
            <polyline className="rb160" points="564,611.67 561,626.67 609,590.67 564,611.67 561,626.67 "/>
            <polygon className="rb161" points="561,626.67 564,611.67 549,629.67 "/>
            <polygon className="rb162" points="564,611.67 534,605.67 549,629.67 "/>
            <polyline className="rb163" points="657,545.67 534,605.67 648,542.67 657,545.67 "/>
            <polyline className="rb164" points="696,530.67 663,554.67 672,554.67 696,530.67 "/>
            <polyline className="rb164" points="657,545.67 663,554.67 696,530.67 657,545.67 "/>
            <polyline className="rb165" points="681,521.67 657,545.67 696,530.67 681,521.67 "/>
            <polygon className="rb166" points="696,530.67 681,521.67 702,509.67 "/>
            <polyline className="rb167" points="705,503.67 702,509.67 681,521.67 705,503.67 "/>
            <polyline className="rb168" points="567,437.67 576,437.67 516,449.67 567,437.67 "/>
            <polyline className="rb169" points="516,449.67 540,434.67 567,437.67 516,449.67 "/>
            <polyline className="rb170" points="516,449.67 516,449.67 576,458.67 576,437.67 516,449.67 "/>
            <polyline className="rb171" points="516,449.67 537,491.67 576,458.67 516,449.67 "/>
            <polyline className="rb172" points="582,485.67 537,491.67 576,458.67 582,485.67 "/>
            <polyline className="rb173" points="648,542.67 573,518.67 534,605.67 648,542.67 "/>
            <polyline className="rb174" points="501,557.67 573,518.67 534,605.67 501,557.67 "/>
            <polygon className="rb175" points="501,557.67 573,518.67 546,509.67 "/>
            <polyline className="rb176" points="507,497.67 501,557.67 546,509.67 507,497.67 501,557.67 "/>
            <polygon className="rb177" points="483,515.67 507,497.67 501,557.67 "/>
            <polyline className="rb178"
                      points="537,491.67 507,497.67 507,497.67 537,491.67 507,497.67 648,542.67 537,491.67 507,497.67 "/>
            <polygon className="rb48" points="507,497.67 537,491.67 516,449.67 "/>
            <polygon className="rb179" points="537,491.67 582,485.67 648,542.67 "/>
            <polyline className="rb180" points="582,485.67 648,542.67 633,500.67 582,485.67 "/>
            <polyline className="rb181" points="705,503.67 693,491.67 702,497.67 705,503.67 "/>
            <polyline className="rb182" points="699,476.67 693,491.67 702,497.67 699,476.67 "/>
            <polygon className="rb183" points="657,545.67 648,542.67 681,521.67 "/>
            <polyline className="rb184" points="693,491.67 681,521.67 648,542.67 693,491.67 "/>
            <polygon className="rb185" points="705,503.67 693,491.67 681,521.67 "/>
            <polygon className="rb186" points="648,542.67 693,491.67 666,488.67 "/>
            <polyline className="rb187" points="633,500.67 648,542.67 666,488.67 633,500.67 "/>
            <polyline className="rb188" points="666,482.67 633,500.67 666,488.67 666,482.67 "/>
            <polygon className="rb189" points="666,482.67 693,491.67 666,488.67 "/>
            <polyline className="rb190" points="666,482.67 678,479.67 693,491.67 666,482.67 "/>
            <polyline className="rb191" points="669,449.67 699,476.67 678,479.67 669,449.67 "/>
            <polyline className="rb192" points="669,449.67 663,461.67 678,479.67 669,449.67 "/>
            <polygon className="rb192" points="693,491.67 678,479.67 699,476.67 "/>
            <polygon className="rb193" points="699,476.67 693,446.67 669,449.67 "/>
            <polyline className="rb194" points="651,446.67 663,461.67 669,449.67 651,446.67 "/>
            <polygon points="270,911.67 261,953.67 297,953.67 "/>
            <polygon className="rb195" points="264,854.67 282,908.67 270,911.67 "/>
            <polygon className="rb196" points="288,875.67 297,953.67 282,908.67 "/>
            <polygon className="rb195" points="309,821.67 297,953.67 297,827.67 "/>
            <polygon className="rb196" points="321,824.67 318,839.67 297,953.67 309,821.67 "/>
            <polygon className="rb196" points="324,851.67 297,953.67 318,839.67 "/>
            <polygon className="rb197" points="363,875.67 297,953.67 324,851.67 "/>
            <polygon className="rb197" points="378,890.67 297,953.67 363,875.67 "/>
            <polygon className="rb198" points="396,893.67 297,953.67 378,890.67 "/>
            <polygon className="rb199" points="471,932.67 297,953.67 396,893.67 "/>
            <polygon points="438,953.67 297,953.67 471,932.67 "/>
            <g>
              <polygon className="rb195" points="243,878.67 219,953.67 252,884.67 	"/>
            </g>
            <g>
              <polygon className="rb197" points="141,953.67 243,878.67 219,953.67 	"/>
            </g>
            <g>
              <polygon className="rb196" points="261,839.67 141,953.67 243,878.67 	"/>
            </g>
            <g>
              <polygon className="rb198" points="141,818.67 153,809.67 282,803.67 	"/>
            </g>
            <g>
              <polygon className="rb196" points="207,782.67 282,803.67 153,809.67 	"/>
            </g>
            <g>
              <polygon className="rb197" points="297,764.67 207,782.67 282,803.67 	"/>
            </g>
            <g>
              <polygon className="rb195" points="300,746.67 297,764.67 207,782.67 	"/>
            </g>
            <polygon className="rb196" points="312,743.67 297,764.67 300,746.67 "/>
            <g>
              <polygon className="rb197" points="252,884.67 261,839.67 243,878.67 	"/>
            </g>
            <g>
              <polygon className="rb196" points="264,854.67 261,839.67 252,884.67 	"/>
            </g>
            <g>
              <polygon className="rb196" points="252,884.67 219,953.67 270,911.67 	"/>
            </g>
            <g>
              <polygon className="rb197" points="270,911.67 261,953.67 219,953.67 	"/>
            </g>
            <g>
              <polygon className="rb195" points="270,911.67 264,854.67 252,884.67 	"/>
            </g>
            <polygon className="rb197" points="270,911.67 282,908.67 297,953.67 "/>
            <polygon className="rb197" points="288,875.67 282,908.67 264,854.67 "/>
            <polygon className="rb196" points="264,854.67 297,827.67 288,875.67 "/>
            <g>
              <polygon className="rb195" points="282,803.67 141,854.67 141,818.67 	"/>
            </g>
            <g>
              <polygon className="rb197" points="141,953.67 282,803.67 141,854.67 	"/>
            </g>
            <polygon className="rb195" points="264,854.67 282,803.67 261,839.67 "/>
            <polygon className="rb197" points="297,827.67 282,803.67 264,854.67 "/>
            <polygon className="rb196" points="309,821.67 282,803.67 297,827.67 "/>
            <polygon className="rb200" points="321,824.67 309,821.67 297,764.67 "/>
            <polygon className="rb201" points="282,803.67 297,764.67 309,821.67 "/>
            <polygon className="rb202" points="321,824.67 312,743.67 297,764.67 "/>
            <polygon className="rb200" points="345,689.67 321,824.67 312,743.67 "/>
            <polygon className="rb201" points="375,641.67 345,689.67 339,773.67 384,641.67 "/>
            <polygon className="rb203" points="393,626.67 375,641.67 384,641.67 "/>
            <polygon className="rb201" points="345,689.67 339,773.67 321,824.67 "/>
            <polygon className="rb201" points="393,626.67 393,689.67 405,620.67 "/>
            <polygon className="rb201" points="384,641.67 393,689.67 393,626.67 "/>
            <polygon className="rb204" points="384,641.67 393,689.67 354,728.67 "/>
            <polygon className="rb203" points="354,728.67 393,689.67 393,740.67 "/>
            <polygon className="rb204" points="396,773.67 393,740.67 354,728.67 "/>
            <polygon className="rb205" points="354,728.67 396,773.67 339,773.67 "/>
            <polygon className="rb206" points="408,815.67 339,773.67 396,773.67 "/>
            <polygon className="rb207" points="384,857.67 339,773.67 408,815.67 "/>
            <polygon className="rb201" points="363,875.67 339,773.67 384,857.67 "/>
            <polygon className="rb200" points="324,851.67 339,773.67 363,875.67 "/>
            <polygon className="rb208" points="321,824.67 324,851.67 318,839.67 "/>
            <polygon className="rb201" points="339,773.67 324,851.67 321,824.67 "/>
            <polygon className="rb209" points="378,890.67 384,857.67 363,875.67 "/>
            <polygon className="rb201" points="396,893.67 384,857.67 378,890.67 "/>
            <polygon className="rb201" points="408,815.67 396,893.67 384,857.67 "/>
            <polygon className="rb200" points="417,827.67 396,893.67 408,815.67 "/>
            <polygon className="rb201" points="426,845.67 396,893.67 417,827.67 "/>
            <polygon className="rb204" points="432,863.67 396,893.67 426,845.67 "/>
            <polygon className="rb200" points="447,884.67 396,893.67 432,863.67 "/>
            <polygon className="rb201" points="465,902.67 396,893.67 447,884.67 "/>
            <polygon className="rb204" points="477,923.67 396,893.67 465,902.67 "/>
            <polygon className="rb201" points="471,932.67 396,893.67 477,923.67 "/>
            <polygon className="rb210" points="426,845.67 417,827.67 426,782.67 "/>
            <polygon className="rb211" points="408,815.67 426,782.67 417,827.67 "/>
            <polygon className="rb212" points="396,773.67 426,782.67 408,815.67 "/>
            <polygon className="rb213" points="393,740.67 426,782.67 396,773.67 "/>
            <polygon className="rb214" points="393,740.67 426,782.67 393,689.67 "/>
            <polygon className="rb215" points="429,737.67 393,689.67 426,782.67 "/>
            <polygon className="rb216" points="429,695.67 393,689.67 429,737.67 "/>
            <polygon className="rb217" points="414,572.67 426,584.67 393,689.67 "/>
            <polygon className="rb218" points="414,542.67 426,584.67 414,572.67 "/>
            <polygon className="rb219" points="426,584.67 429,536.67 414,542.67 "/>
            <polygon className="rb220" points="426,584.67 429,695.67 393,689.67 "/>
            <polygon className="rb221" points="438,587.67 429,536.67 438,536.67 "/>
            <polyline className="rb222" points="414,542.67 411,536.67 429,536.67 414,542.67 "/>
            <polygon className="rb223" points="429,536.67 426,584.67 438,587.67 "/>
            <polygon className="rb224" points="438,587.67 450,638.67 426,584.67 "/>
            <polygon className="rb225" points="462,665.67 426,782.67 450,638.67 "/>
            <path className="rb225" d="M426,584.67"/>
            <path className="rb220" d="M426,584.67"/>
            <polygon className="rb226" points="426,584.67 450,638.67 429,737.67 "/>
            <polygon className="rb227" points="450,638.67 426,782.67 429,737.67 "/>
            <polygon className="rb228" points="462,665.67 447,767.67 426,782.67 "/>
            <polygon className="rb229" points="426,782.67 447,767.67 426,845.67 "/>
            <polygon className="rb230" points="432,863.67 447,767.67 426,845.67 "/>
            <polygon className="rb231" points="447,884.67 432,863.67 447,767.67 "/>
            <polygon className="rb232" points="465,902.67 477,923.67 474,908.67 "/>
            <polyline className="rb233" points="459,689.67 489,743.67 513,710.67 459,689.67 "/>
            <polygon className="rb234" points="525,755.67 489,743.67 513,710.67 "/>
            <polyline className="rb235" points="447,767.67 486,776.67 489,743.67 447,767.67 "/>
            <polygon className="rb236" points="534,785.67 486,776.67 525,755.67 "/>
            <polyline className="rb237" points="489,743.67 525,755.67 486,776.67 489,743.67 "/>
            <polyline className="rb238" points="447,767.67 486,776.67 483,803.67 447,767.67 "/>
            <polygon className="rb239" points="474,908.67 474,908.67 474,908.67 447,767.67 483,803.67 "/>
            <polyline className="rb240" points="525,839.67 474,908.67 483,803.67 525,839.67 "/>
            <polygon className="rb241" points="486,776.67 483,803.67 534,785.67 "/>
            <polyline className="rb242" points="525,839.67 483,803.67 534,785.67 525,839.67 "/>
            <polygon className="rb243" points="543,815.67 525,839.67 534,785.67 "/>
            <polygon className="rb244" points="576,767.67 525,755.67 513,710.67 "/>
            <polygon className="rb245" points="534,785.67 525,755.67 576,767.67 "/>
            <polygon className="rb246" points="561,791.67 534,785.67 576,767.67 "/>
            <polygon className="rb247" points="552,803.67 534,785.67 561,791.67 "/>
            <polygon className="rb248" points="543,815.67 552,803.67 534,785.67 "/>
            <polygon className="rb249" points="576,767.67 561,791.67 621,788.67 "/>
            <polygon className="rb250" points="603,806.67 561,791.67 621,788.67 "/>
            <polygon className="rb251" points="552,803.67 561,791.67 603,806.67 "/>
            <polygon className="rb252" points="543,815.67 588,827.67 552,803.67 "/>
            <polygon className="rb253" points="603,806.67 552,803.67 588,827.67 "/>
            <polygon className="rb254" points="459,689.67 489,743.67 447,767.67 "/>
            <polygon className="rb255" points="465,902.67 447,884.67 447,767.67 "/>
            <polygon className="rb256" points="447,767.67 465,902.67 474,908.67 "/>
            <polygon className="rb257" points="462,665.67 459,689.67 513,710.67 "/>
            <polygon className="rb258" points="474,908.67 477,923.67 558,869.67 "/>
            <polygon className="rb259" points="555,866.67 558,869.67 474,908.67 "/>
            <polygon className="rb260" points="525,839.67 555,866.67 474,908.67 "/>
            <polygon className="rb261" points="603,839.67 588,827.67 576,845.67 "/>
            <polygon className="rb262" points="582,854.67 576,845.67 603,839.67 "/>
            <polygon className="rb263" points="558,863.67 576,845.67 582,854.67 "/>
            <polygon className="rb264" points="558,869.67 558,863.67 582,854.67 "/>
            <polygon className="rb265" points="543,815.67 555,866.67 525,839.67 "/>
            <polygon className="rb266" points="576,845.67 543,815.67 588,827.67 "/>
            <polygon className="rb267" points="558,863.67 576,845.67 543,815.67 "/>
            <path className="rb267" d="M558,869.67"/>
            <polygon className="rb268" points="558,863.67 555,866.67 558,869.67 "/>
            <polygon className="rb269" points="543,815.67 558,863.67 555,866.67 "/>
            <polygon className="rb270" points="603,806.67 603,839.67 588,827.67 "/>
            <polygon className="rb271" points="621,788.67 603,839.67 603,806.67 "/>
            <polygon className="rb4" points="627,794.67 603,839.67 621,788.67 "/>
            <polygon className="rb272" points="609,455.67 615,464.67 612,455.67 "/>
            <polygon className="rb273" points="612,455.67 615,458.67 615,464.67 "/>
            <polygon className="rb274" points="609,464.67 609,455.67 615,464.67 "/>
            <polygon className="rb275" points="606,458.67 609,461.67 609,455.67 "/>
            <polygon className="rb276" points="609,464.67 606,461.67 609,461.67 "/>
            <polygon className="rb277" points="606,458.67 609,461.67 606,461.67 "/>
            <polygon className="rb278" points="618,455.67 621,455.67 618,464.67 "/>
            <polygon className="rb279" points="621,464.67 618,464.67 621,455.67 "/>
            <polygon className="rb280" points="600,449.67 609,455.67 618,446.67 "/>
            <polygon className="rb281" points="621,446.67 609,455.67 618,446.67 "/>
            <polygon className="rb282" points="600,449.67 594,461.67 609,455.67 "/>
            <polygon className="rb283" points="609,455.67 594,461.67 606,458.67 "/>
            <polygon className="rb284" points="600,467.67 594,461.67 606,458.67 "/>
            <polygon className="rb285" points="606,461.67 600,467.67 606,458.67 "/>
            <polygon className="rb286" points="609,464.67 600,467.67 606,461.67 "/>
            <polygon className="rb287" points="609,470.67 600,467.67 609,464.67 "/>
            <polygon className="rb288" points="621,470.67 609,470.67 609,464.67 "/>
            <polygon className="rb289" points="627,464.67 621,470.67 609,464.67 "/>
            <polygon className="rb290" points="615,458.67 618,464.67 615,464.67 "/>
            <polygon className="rb291" points="618,455.67 618,464.67 615,458.67 "/>
            <polygon className="rb292" points="612,455.67 609,455.67 621,446.67 "/>
            <polygon className="rb293" points="615,458.67 612,455.67 621,446.67 "/>
            <polygon className="rb294" points="618,455.67 615,458.67 621,446.67 "/>
            <polygon className="rb295" points="624,449.67 618,455.67 621,446.67 "/>
            <polygon className="rb296" points="621,455.67 618,455.67 624,449.67 "/>
            <polygon className="rb297" points="627,455.67 621,455.67 624,449.67 "/>
            <polygon className="rb298" points="621,464.67 627,455.67 627,464.67 "/>
            <polygon className="rb299" points="621,455.67 621,464.67 627,455.67 "/>
            <path className="rb299" d="M621,446.67"/>
            <polygon className="rb300" points="636,449.67 621,446.67 624,449.67 "/>
            <polygon className="rb301" points="627,455.67 624,449.67 636,449.67 "/>
            <polygon className="rb302" points="642,452.67 627,455.67 636,449.67 "/>
            <polygon className="rb303" points="645,458.67 627,455.67 642,452.67 "/>
            <polygon className="rb304" points="645,461.67 627,455.67 645,458.67 "/>
            <polygon className="rb305" points="627,464.67 645,461.67 627,455.67 "/>
            <polygon className="rb306" points="642,467.67 627,464.67 645,461.67 "/>
            <polygon className="rb307" points="636,473.67 627,464.67 642,467.67 "/>
            <polygon className="rb308" points="621,470.67 627,464.67 636,473.67 "/>
            <polygon className="rb309" points="615,473.67 621,470.67 636,473.67 "/>
            <polygon className="rb310" points="609,470.67 621,470.67 615,473.67 "/>
            <polygon className="rb311" points="600,470.67 600,467.67 609,470.67 "/>
            <polygon className="rb312" points="615,473.67 600,470.67 609,470.67 "/>
            <polygon className="rb313" points="600,467.67 600,470.67 594,461.67 "/>
            <polygon className="rb314" points="588,464.67 594,461.67 600,470.67 "/>
            <polygon className="rb315" points="585,461.67 594,461.67 588,464.67 "/>
            <polygon className="rb316" points="600,449.67 585,461.67 594,461.67 "/>
            <polygon className="rb317" points="579,458.67 585,452.67 585,461.67 "/>
            <polygon className="rb318" points="600,449.67 585,452.67 585,461.67 "/>
            <polygon className="rb319" points="621,446.67 636,449.67 636,446.67 "/>
            <polygon className="rb320" points="621,443.67 621,446.67 636,446.67 "/>
            <polygon className="rb321" points="636,449.67 636,446.67 642,449.67 "/>
            <polygon className="rb322" points="642,452.67 636,449.67 642,449.67 "/>
            <polygon className="rb323" points="645,458.67 642,452.67 642,449.67 "/>
            <polygon className="rb324" points="645,458.67 642,449.67 654,461.67 "/>
            <polygon className="rb325" points="645,461.67 645,458.67 654,461.67 "/>
            <polygon className="rb326" points="660,470.67 654,461.67 645,461.67 "/>
            <polygon className="rb327" points="642,467.67 660,470.67 645,461.67 "/>
            <polygon className="rb328" points="657,473.67 660,470.67 642,467.67 "/>
            <polygon className="rb329" points="636,473.67 642,467.67 657,473.67 "/>
            <polygon className="rb330" points="579,458.67 582,485.67 591,473.67 "/>
            <polygon className="rb331" points="600,470.67 591,473.67 588,464.67 "/>
            <polygon className="rb332" points="579,458.67 591,473.67 588,464.67 "/>
            <path className="rb333" d="M585,461.67l3,3L585,461.67z"/>
            <polygon className="rb334" points="579,458.67 588,464.67 585,461.67 "/>
            <polygon className="rb335" points="591,473.67 600,470.67 606,479.67 "/>
            <polygon className="rb336" points="615,473.67 606,479.67 600,470.67 "/>
            <polygon className="rb337" points="624,482.67 606,479.67 615,473.67 "/>
            <polygon className="rb338" points="636,473.67 615,473.67 624,482.67 "/>
            <polygon className="rb339" points="648,473.67 642,476.67 636,473.67 "/>
            <polygon className="rb340" points="624,482.67 636,473.67 642,476.67 "/>
            <polygon className="rb341" points="648,473.67 642,476.67 654,476.67 "/>
            <polygon className="rb342" points="657,473.67 648,473.67 654,476.67 "/>
            <polygon className="rb343" points="642,476.67 666,482.67 654,476.67 "/>
            <polygon className="rb344" points="660,470.67 654,476.67 666,482.67 "/>
            <polygon className="rb345" points="663,461.67 660,470.67 666,482.67 "/>
            <polygon className="rb346" points="654,461.67 663,461.67 660,470.67 "/>
            <polygon className="rb347" points="666,482.67 678,479.67 663,461.67 "/>
            <polygon className="rb348" points="654,461.67 663,461.67 651,446.67 "/>
            <polygon className="rb349" points="642,449.67 651,446.67 654,461.67 "/>
            <polygon className="rb350" points="642,440.67 651,446.67 642,449.67 "/>
            <polygon className="rb351" points="636,446.67 642,440.67 642,449.67 "/>
            <polygon className="rb352" points="621,443.67 642,440.67 636,446.67 "/>
            <path className="rb352" d="M621,446.67l-18-6L621,446.67z"/>
            <polygon className="rb353" points="621,443.67 618,446.67 621,446.67 "/>
            <polygon className="rb354" points="600,449.67 621,443.67 618,446.67 "/>
            <polygon className="rb355" points="603,440.67 621,443.67 600,449.67 "/>
            <polygon className="rb356" points="585,452.67 603,440.67 600,449.67 "/>
            <polygon className="rb357" points="591,443.67 603,440.67 585,452.67 "/>
            <polygon className="rb358" points="579,437.67 591,443.67 585,452.67 "/>
            <polygon className="rb359" points="585,452.67 579,458.67 579,437.67 "/>
            <polygon className="rb360" points="576,437.67 579,437.67 579,458.67 "/>
            <polygon className="rb361" points="576,455.67 576,437.67 579,458.67 "/>
            <polygon className="rb362" points="582,485.67 576,458.67 579,458.67 "/>
            <polygon className="rb363" points="576,455.67 576,458.67 579,458.67 "/>
            <polygon className="rb364" points="591,473.67 606,479.67 582,485.67 "/>
            <path className="rb364" d="M633,500.67"/>
            <polygon className="rb365" points="612,494.67 606,479.67 582,485.67 "/>
            <polygon className="rb366" points="624,482.67 612,494.67 606,479.67 "/>
            <polygon className="rb367" points="633,500.67 624,482.67 612,494.67 "/>
            <polygon className="rb368" points="642,476.67 633,500.67 624,482.67 "/>
            <polygon className="rb369" points="666,482.67 642,476.67 633,500.67 "/>
            <polygon className="rb370" points="576,437.67 567,437.67 576,425.67 "/>
            <polygon className="rb371" points="540,434.67 576,425.67 567,437.67 "/>
            <polygon className="rb372" points="576,437.67 603,425.67 576,425.67 "/>
            <polygon className="rb261" points="603,425.67 591,443.67 579,437.67 "/>
            <polygon className="rb373" points="579,437.67 576,437.67 603,425.67 "/>
            <polygon className="rb374" points="603,440.67 591,443.67 603,425.67 "/>
            <polygon className="rb375" points="621,443.67 603,440.67 603,425.67 "/>
            <polygon className="rb376" points="693,446.67 669,449.67 660,431.67 "/>
            <polygon className="rb377" points="669,449.67 660,431.67 651,446.67 "/>
            <polygon className="rb378" points="651,446.67 642,440.67 660,431.67 "/>
            <polygon className="rb379" points="660,431.67 642,440.67 639,425.67 "/>
            <polygon className="rb380" points="642,440.67 621,443.67 639,425.67 "/>
            <polygon className="rb381" points="639,425.67 621,443.67 627,428.67 "/>
            <polygon className="rb382" points="627,428.67 621,443.67 603,425.67 "/>
            <polygon className="rb383" points="693,551.67 672,554.67 696,530.67 "/>
            <polygon className="rb384" points="681,563.67 672,554.67 693,551.67 "/>
            <polygon className="rb385" points="642,593.67 645,566.67 645,578.44 "/>
            <polygon className="rb386" points="621,596.44 645,566.67 642.02,593.44 642,593.67 "/>
            <polygon className="rb387" points="647.98,587.67 642,593.67 644.98,578.67 "/>
            <polygon className="rb388" points="656.98,596.67 642,593.67 647.98,587.67 "/>
            <polygon className="rb389" points="693,446.67 675,401.67 660,431.67 "/>
            <polygon className="rb390" points="639,425.67 675,401.67 660,431.67 "/>
            <polyline id="XMLID_10_" className="rb391" points="576,425.67 540,434.67 570,416.67 576,425.67 "/>
            <polygon className="rb392" points="576,425.67 591,425.67 639,410.67 "/>
            <polyline className="rb393" points="639,410.67 591,425.67 603,425.67 639,410.67 "/>
            <polyline className="rb394" points="639,410.67 603,425.67 627,428.67 639,410.67 "/>
            <polygon className="rb395" points="627,428.67 639,410.67 639,425.67 "/>
            <polygon className="rb396" points="675,401.67 639,410.67 639,425.67 "/>
            <polygon className="rb397" points="570,416.67 639,410.67 576,425.67 "/>
            <polygon className="rb398" points="507,497.67 477,500.67 483,515.67 "/>
            <polygon className="rb399" points="516,449.67 477,500.67 507,497.67 "/>
            <polygon className="rb400" points="474,431.67 516,449.67 477,500.67 "/>
            <polygon className="rb401" points="540,434.67 474,431.67 516,449.67 "/>
            <polygon className="rb402" points="489,380.67 540,434.67 474,431.67 "/>
            <polygon className="rb403" points="522,362.67 540,434.67 489,380.67 "/>
            <polygon className="rb404" points="570,416.67 522,362.67 540,434.67 "/>
            <polygon className="rb405" points="582,338.67 522,362.67 570,416.67 "/>
            <polygon className="rb406" points="639,410.67 582,338.67 570,416.67 "/>
            <polygon className="rb407" points="582,338.67 675,401.67 639,410.67 "/>
            <polygon className="rb408" points="666,344.67 582,338.67 675,401.67 "/>
            <polygon className="rb409" points="582,338.67 537,260.67 522,287.67 "/>
            <polygon className="rb410" points="549,224.67 582,338.67 537,260.67 "/>
            <polygon className="rb411" points="570,239.67 582,338.67 549,224.67 "/>
            <polygon className="rb412" points="591,233.67 582,338.67 570,239.67 "/>
            <polygon className="rb413" points="522,242.67 522,287.67 501,269.67 "/>
            <polygon className="rb414" points="537,260.67 522,242.67 522,287.67 "/>
            <polygon className="rb415" points="549,224.67 525,203.67 522,242.67 "/>
            <polygon className="rb416" points="537,260.67 522,242.67 549,224.67 "/>
            <polygon className="rb417" points="546,209.67 549,224.67 525,203.67 "/>
            <polygon className="rb418" points="570,239.67 546,209.67 549,224.67 "/>
            <polygon className="rb419" points="573,197.67 570,239.67 546,209.67 "/>
            <polygon className="rb420" points="582,215.67 573,197.67 570,239.67 "/>
            <polyline className="rb421" points="582,338.67 609,245.67 591,233.67 582,338.67 "/>
            <polygon className="rb422" points="636,239.67 582,338.67 609,245.67 "/>
            <polygon className="rb423" points="651,257.67 582,338.67 636,239.67 "/>
            <polygon className="rb424" points="663,257.67 582,338.67 651,257.67 "/>
            <polyline className="rb425" points="666,344.67 582,338.67 663,257.67 666,344.67 582,338.67 "/>
            <polygon className="rb426" points="501,269.67 522,287.67 522,362.67 "/>
            <polyline className="rb427" points="582,338.67 522,362.67 522,287.67 582,338.67 "/>
            <polygon className="rb428" points="462,665.67 516,620.67 513,710.67 "/>
            <polygon className="rb429" points="438,587.67 516,620.67 450,638.67 "/>
            <polygon className="rb430" points="501,557.67 438,587.67 516,620.67 "/>
            <polygon className="rb431" points="450,638.67 462,665.67 516,620.67 "/>
            <polygon className="rb432" points="558,656.67 513,710.67 516,620.67 "/>
            <polygon className="rb433" points="618,731.67 513,710.67 558,656.67 "/>
            <polygon className="rb434" points="576,767.67 618,731.67 513,710.67 "/>
            <polygon className="rb24" points="621,788.67 576,767.67 618,731.67 "/>
            <polygon className="rb435" points="516,620.67 534,605.67 501,557.67 "/>
            <polyline className="rb154" points="585,629.67 588,638.67 588,629.67 585,629.67 "/>
            <polyline className="rb436" points="642,593.67 708,611.67 678,632.67 642,593.67 "/>
            <polyline className="rb437" points="702,611.67 678,632.67 708,611.67 729,632.67 678,632.67 "/>
            <polygon className="rb438" points="678,632.67 642,593.67 654,626.67 "/>
            <polyline className="rb439" points="642,593.67 654,626.67 615,623.67 642,593.67 "/>
            <polygon className="rb440" points="615,623.67 642,593.67 585,629.67 "/>
            <polygon className="rb441" points="642,593.67 585,629.67 621,596.44 "/>
            <polygon className="rb442" points="621,596.44 585,629.67 609,590.67 "/>
            <polyline className="rb443" points="585,629.67 561,626.67 609,590.67 585,629.67 "/>
            <polyline className="rb444" points="558,656.67 618,731.67 579,653.67 558,656.67 "/>
            <polyline className="rb445" points="558,656.67 579,653.67 561,626.67 558,656.67 "/>
            <polygon className="rb446" points="585,629.67 561,626.67 579,653.67 "/>
            <polygon className="rb246" points="561,626.67 558,656.67 549,629.67 "/>
            <polygon className="rb447" points="558,656.67 549,629.67 516,620.67 "/>
            <polygon className="rb448" points="549,629.67 516,620.67 534,605.67 "/>
            <path className="rb449" d="M669,656.67"/>
            <line className="rb450" x1="639" y1="647.67" x2="654" y2="647.67"/>
            <polyline className="rb451" points="618,653.67 612,650.67 618,641.67 618,653.67 "/>
            <polygon className="rb452" points="612,650.67 618,641.67 600,641.67 "/>
            <polygon className="rb453" points="600,641.67 618,641.67 609,632.67 "/>
            <polyline className="rb454" points="624,635.67 609,632.67 618,641.67 "/>
            <polyline className="rb455" points="639,662.67 636,656.67 618,653.67 639,662.67 "/>
            <polyline className="rb456" points="636,656.67 618,653.67 618,641.67 636,656.67 "/>
            <polyline className="rb457" points="636,656.67 618,641.67 639,647.67 636,656.67 "/>
            <polygon className="rb458" points="618,641.67 639,647.67 624,635.67 "/>
            <polyline className="rb450" points="654,647.67 624,635.67 639,647.67 "/>
            <polyline className="rb459" points="639,647.67 651,656.67 654,647.67 639,647.67 "/>
            <polyline className="rb460" points="651,656.67 663,650.67 654,647.67 651,656.67 "/>
            <polygon className="rb461" points="639,647.67 651,656.67 636,656.67 "/>
            <polygon className="rb462" points="636,656.67 651,656.67 639,662.67 "/>
            <polygon className="rb463" points="669,656.67 657,662.67 663,650.67 "/>
            <polygon className="rb449" points="657,662.67 660,656.67 663,650.67 639,662.67 "/>
            <polygon className="rb464" points="777,617.67 765,626.67 768,647.67 "/>
            <polygon className="rb465" points="783,620.67 777,617.67 768,647.67 "/>
            <polygon className="rb466" points="750,593.67 735,608.67 750,602.67 "/>
            <polygon className="rb467" points="735,608.67 750,623.67 750,602.67 "/>
            <polygon className="rb468" points="762,593.67 750,602.67 777,599.67 "/>
            <polygon className="rb469" points="777,617.67 750,602.67 777,599.67 "/>
            <polygon className="rb470" points="765,626.67 750,602.67 777,617.67 "/>
            <polygon className="rb471" points="750,623.67 750,602.67 765,626.67 "/>
            <polygon className="rb472" points="759,650.67 765,626.67 750,623.67 "/>
            <polygon className="rb473" points="720,722.67 699,728.67 705,749.67 "/>
            <polygon className="rb474" points="657,722.67 642,773.67 618,731.67 "/>
            <polygon className="rb475" points="657,776.67 657,722.67 642,773.67 "/>
            <polygon className="rb476" points="681,770.67 657,722.67 657,776.67 "/>
            <polygon className="rb477" points="705,749.67 657,722.67 681,770.67 "/>
            <polygon className="rb478" points="699,728.67 657,722.67 705,749.67 "/>
            <path className="rb478" d="M810,512.67"/>
            <polyline className="rb479" points="801,584.67 771,587.67 762,593.67 801,584.67 "/>
            <polygon className="rb480" points="762,575.67 750,593.67 762,593.67 "/>
            <polygon className="rb480" points="771,587.67 762,575.67 762,593.67 "/>
            <polyline className="rb481" points="750,578.67 750,593.67 762,575.67 750,578.67 "/>
            <polygon className="rb482" points="759,557.67 750,578.67 762,575.67 "/>
            <polyline className="rb483" points="747,566.67 750,578.67 759,557.67 747,566.67 "/>
            <polygon className="rb484" points="777,527.67 747,566.67 759,557.67 "/>
            <polygon id="XMLID_9_" className="rb485" points="762,593.67 801,584.67 777,599.67 "/>
            <polygon className="rb486" points="762,593.67 750,593.67 750,602.67 "/>
            <polygon className="rb487" points="765,527.67 747,566.67 777,527.67 "/>
            <polygon className="rb488" points="744,521.67 747,566.67 765,527.67 "/>
            <polygon className="rb489" points="732,512.67 747,566.67 744,521.67 "/>
            <polygon className="rb490" points="735,548.67 741,557.67 732,512.67 "/>
            <polygon className="rb491" points="744,521.67 756,512.67 765,527.67 "/>
            <polygon className="rb492" points="777,527.67 756,512.67 765,527.67 "/>
            <polygon className="rb493" points="729,491.67 756,512.67 732,512.67 "/>
            <polygon className="rb494" points="744,521.67 732,512.67 756,512.67 "/>
            <polygon className="rb495" points="738,476.67 729,491.67 729,476.67 "/>
            <polygon className="rb496" points="756,512.67 738,476.67 729,491.67 "/>
            <polygon className="rb497" points="747,479.67 738,476.67 756,512.67 "/>
            <polygon className="rb498" points="765,488.67 756,512.67 747,479.67 "/>
            <polygon className="rb499" points="786,500.67 765,488.67 756,512.67 "/>
            <polygon className="rb500" points="780,482.67 765,488.67 786,500.67 "/>
            <polygon className="rb501" points="789,476.67 786,500.67 780,482.67 "/>
            <polygon className="rb502" points="810,479.67 789,476.67 786,500.67 "/>
            <polygon className="rb503" points="792,464.67 789,476.67 810,479.67 "/>
            <polygon className="rb504" points="804,467.67 792,464.67 810,479.67 "/>
            <polygon className="rb505" points="810,458.67 804,467.67 810,479.67 "/>
            <polygon className="rb506" points="792,464.67 804,467.67 804,464.67 "/>
            <polygon className="rb507" points="810,458.67 804,464.67 804,467.67 "/>
            <polygon className="rb508" points="789,452.67 810,458.67 801,461.67 "/>
            <polygon className="rb509" points="807,461.67 801,461.67 810,458.67 "/>
            <polygon className="rb510" points="804,464.67 801,461.67 807,461.67 "/>
            <polygon className="rb511" points="792,464.67 801,461.67 804,464.67 "/>
            <polygon className="rb512" points="789,452.67 801,461.67 792,464.67 "/>
            <polygon className="rb513" points="789,464.67 789,452.67 792,464.67 "/>
            <polygon className="rb514" points="783,458.67 789,452.67 789,464.67 "/>
            <polygon className="rb515" points="771,452.67 783,458.67 789,452.67 "/>
            <polygon className="rb516" points="792,464.67 789,476.67 789,464.67 "/>
            <polygon className="rb517" points="780,482.67 789,464.67 789,476.67 "/>
            <polygon className="rb518" points="783,458.67 780,482.67 789,464.67 "/>
            <polygon className="rb519" points="780,470.67 783,458.67 780,458.67 "/>
            <polygon className="rb520" points="765,488.67 780,470.67 780,482.67 "/>
            <polygon className="rb521" points="783,458.67 780,482.67 780,470.67 "/>
            <polygon className="rb522" points="747,479.67 765,488.67 768,479.67 "/>
            <polygon className="rb523" points="780,470.67 765,488.67 768,479.67 "/>
            <polygon className="rb524" points="780,470.67 771,470.67 768,479.67 "/>
            <polygon className="rb525" points="780,458.67 774,467.67 780,470.67 "/>
            <polygon className="rb526" points="771,470.67 774,467.67 780,470.67 "/>
            <polygon className="rb527" points="780,458.67 774,461.67 774,467.67 "/>
            <polygon className="rb528" points="771,452.67 771,458.67 780,458.67 "/>
            <polygon className="rb529" points="774,461.67 780,458.67 771,458.67 "/>
            <polygon className="rb530" points="759,452.67 771,452.67 765,458.67 "/>
            <polygon className="rb531" points="771,458.67 771,452.67 765,458.67 "/>
            <polygon className="rb532" points="768,461.67 771,458.67 765,458.67 "/>
            <polygon className="rb533" points="768,467.67 768,461.67 765,458.67 "/>
            <polygon className="rb534" points="765,470.67 765,458.67 768,467.67 "/>
            <polygon className="rb535" points="771,470.67 768,479.67 768,467.67 "/>
            <polygon className="rb536" points="756,479.67 765,470.67 768,479.67 "/>
            <polygon className="rb537" points="768,467.67 768,479.67 765,470.67 "/>
            <polygon className="rb538" points="771,458.67 774,461.67 768,461.67 "/>
            <polygon className="rb539" points="771,470.67 768,467.67 774,467.67 "/>
            <polygon className="rb540" points="768,461.67 774,467.67 768,467.67 "/>
            <polygon className="rb541" points="774,461.67 774,467.67 768,461.67 "/>
            <polygon className="rb542" points="759,452.67 756,461.67 744,458.67 "/>
            <polygon className="rb543" points="765,458.67 759,452.67 756,461.67 "/>
            <path className="rb543" d="M765,470.67v-12V470.67z"/>
            <polygon className="rb544" points="756,461.67 765,470.67 765,458.67 "/>
            <path className="rb544" d="M756,470.67v-9V470.67z"/>
            <polygon className="rb545" points="765,470.67 756,461.67 756,470.67 "/>
            <polygon className="rb546" points="756,479.67 765,470.67 756,470.67 "/>
            <polygon className="rb547" points="750,479.67 756,470.67 756,479.67 "/>
            <polygon className="rb548" points="738,476.67 747,479.67 756,470.67 "/>
            <polygon className="rb549" points="750,479.67 756,470.67 747,479.67 "/>
            <polygon className="rb550" points="753,470.67 756,470.67 738,476.67 "/>
            <polygon className="rb551" points="738,473.67 753,470.67 738,476.67 "/>
            <polygon className="rb552" points="735,470.67 753,470.67 738,473.67 "/>
            <polygon className="rb553" points="735,467.67 735,470.67 753,470.67 "/>
            <polygon className="rb554" points="744,458.67 753,470.67 735,467.67 "/>
            <polygon className="rb555" points="756,461.67 744,458.67 753,461.67 "/>
            <polygon className="rb556" points="753,470.67 744,458.67 753,461.67 "/>
            <polygon className="rb557" points="756,461.67 753,461.67 756,470.67 "/>
            <polygon className="rb558" points="753,470.67 753,461.67 756,470.67 "/>
            <polygon className="rb559" points="738,476.67 738,473.67 729,476.67 "/>
            <polygon className="rb560" points="735,470.67 738,473.67 729,476.67 "/>
            <polygon className="rb561" points="735,467.67 729,476.67 735,470.67 "/>
            <polygon className="rb562" points="729,470.67 729,476.67 735,467.67 "/>
            <polygon className="rb563" points="693,446.67 735,467.67 729,470.67 "/>
            <polygon className="rb564" points="711,437.67 693,446.67 735,467.67 "/>
            <polygon className="rb565" points="744,458.67 711,437.67 735,467.67 "/>
            <polygon className="rb566" points="732,431.67 711,437.67 744,458.67 "/>
            <polygon className="rb567" points="759,431.67 744,458.67 732,431.67 "/>
            <path className="rb567" d="M759,452.67"/>
            <polygon className="rb568" points="744,458.67 756,446.67 759,452.67 "/>
            <polygon className="rb569" points="774,443.67 756,446.67 759,452.67 "/>
            <polygon className="rb570" points="771,452.67 774,443.67 759,452.67 "/>
            <polygon className="rb571" points="789,452.67 771,452.67 792,446.67 "/>
            <polygon className="rb572" points="792,446.67 774,443.67 771,452.67 "/>
            <polygon className="rb573" points="798,431.67 774,443.67 792,446.67 "/>
            <polygon className="rb574" points="816,446.67 798,431.67 792,446.67 "/>
            <polygon className="rb575" points="813,428.67 798,431.67 816,446.67 "/>
            <polygon className="rb576" points="822,449.67 813,428.67 816,446.67 "/>
            <polygon className="rb577" points="828,443.67 813,428.67 822,449.67 "/>
            <polygon className="rb578" points="822,425.67 813,428.67 828,443.67 "/>
            <polygon className="rb579" points="810,458.67 792,446.67 816,446.67 "/>
            <polygon className="rb580" points="822,449.67 810,458.67 816,446.67 "/>
            <polygon className="rb581" points="792,446.67 789,452.67 810,458.67 "/>
            <polygon className="rb582" points="759,431.67 744,458.67 756,446.67 "/>
            <polygon className="rb583" points="774,443.67 756,446.67 759,431.67 "/>
            <polygon className="rb584" points="798,431.67 759,431.67 774,443.67 "/>
            <polygon className="rb585" points="762,425.67 759,431.67 798,431.67 "/>
            <polygon className="rb586" points="768,401.67 762,425.67 798,431.67 "/>
            <polygon className="rb587" points="813,428.67 816,398.67 822,425.67 "/>
            <polygon className="rb588" points="798,431.67 816,398.67 813,428.67 "/>
            <polygon className="rb589" points="768,401.67 798,431.67 816,398.67 "/>
            <polygon className="rb590" points="792,395.67 816,398.67 768,401.67 "/>
            <polygon className="rb591" points="771,587.67 810,560.67 801,584.67 "/>
            <polygon className="rb592" points="762,575.67 810,560.67 771,587.67 "/>
            <polygon className="rb593" points="759,557.67 810,560.67 762,575.67 "/>
            <polygon className="rb594" points="795,551.67 759,557.67 810,560.67 "/>
            <polygon className="rb594" points="789,536.67 759,557.67 795,551.67 "/>
            <polygon className="rb595" points="729,491.67 702,509.67 732,512.67 "/>
            <polygon className="rb596" points="741,557.67 732,512.67 747,566.67 "/>
            <polygon className="rb39" points="744,563.67 741,557.67 747,566.67 "/>
            <polygon className="rb597" points="777,527.67 759,557.67 789,536.67 "/>
            <polygon className="rb598" points="795,551.67 810,491.67 810,560.67 "/>
            <polygon className="rb599" points="789,536.67 810,491.67 795,551.67 "/>
            <polygon className="rb600" points="789,518.67 789,536.67 810,491.67 "/>
            <polygon className="rb601" points="798,503.67 789,518.67 810,491.67 "/>
            <polygon className="rb602" points="777,527.67 789,518.67 789,536.67 "/>
            <polygon className="rb603" points="756,512.67 777,527.67 789,518.67 "/>
            <polygon className="rb604" points="786,500.67 756,512.67 789,518.67 "/>
            <polygon className="rb605" points="798,503.67 789,518.67 786,500.67 "/>
            <polygon className="rb606" points="810,479.67 798,503.67 786,500.67 "/>
            <polygon className="rb607" points="810,491.67 810,479.67 798,503.67 "/>
            <polygon className="rb608" points="675,401.67 711,437.67 693,446.67 "/>
            <polygon className="rb609" points="732,431.67 675,401.67 711,437.67 "/>
            <polygon className="rb610" points="732,410.67 732,431.67 675,401.67 "/>
            <polygon className="rb611" points="759,431.67 732,410.67 732,431.67 "/>
            <polygon className="rb612" points="762,425.67 732,410.67 759,431.67 "/>
            <polygon className="rb613" points="768,401.67 732,410.67 762,425.67 "/>
            <polygon className="rb614" points="747,377.67 675,401.67 732,410.67 "/>
            <path className="rb615" d="M726,308.67"/>
            <path className="rb615" d="M675,401.67"/>
            <path className="rb425" d="M675,401.67"/>
            <polygon className="rb616" points="675,401.67 666,344.67 690,368.67 "/>
            <polygon className="rb617" points="675,401.67 690,368.67 720,374.67 "/>
            <polygon className="rb618" points="747,377.67 720,374.67 675,401.67 "/>
            <polygon className="rb619" points="732,365.67 720,374.67 747,377.67 "/>
            <polygon className="rb620" points="738,341.67 747,377.67 732,365.67 "/>
            <polygon className="rb621" points="732,365.67 738,341.67 726,308.67 "/>
            <polygon className="rb622" points="720,374.67 726,308.67 732,365.67 "/>
            <polygon className="rb623" points="690,368.67 726,308.67 720,374.67 "/>
            <polygon className="rb624" points="666,344.67 726,308.67 690,368.67 "/>
            <polygon className="rb625" points="672,305.67 666,344.67 726,308.67 "/>
            <polygon className="rb626" points="663,257.67 666,344.67 672,305.67 "/>
            <polygon className="rb627" points="732,410.67 747,377.67 768,401.67 "/>
            <polygon className="rb628" points="747,329.67 768,401.67 747,377.67 "/>
            <polygon className="rb629" points="726,308.67 663,257.67 672,305.67 "/>
            <polygon className="rb628" points="747,377.67 747,329.67 768,401.67 "/>
            <polygon className="rb630" points="738,341.67 747,329.67 747,377.67 "/>
            <polygon className="rb631" points="726,308.67 747,329.67 738,341.67 "/>
            <polygon className="rb632" points="744,278.67 726,308.67 747,329.67 "/>
            <polygon className="rb633" points="663,257.67 726,308.67 744,278.67 "/>
            <polygon className="rb634" points="678,257.67 663,257.67 744,278.67 "/>
            <polygon className="rb243" points="702,260.67 678,257.67 744,278.67 "/>
            <polygon className="rb635" points="768,401.67 792,395.67 801,386.67 "/>
            <polygon className="rb636" points="816,398.67 801,386.67 792,395.67 "/>
            <polygon className="rb637" points="819,374.67 801,386.67 816,398.67 "/>
            <polygon className="rb638" points="792,362.67 819,374.67 801,386.67 "/>
            <polygon className="rb639" points="768,401.67 792,362.67 801,386.67 "/>
            <polygon className="rb640" points="747,329.67 792,362.67 768,401.67 "/>
            <polygon className="rb641" points="777,341.67 747,329.67 792,362.67 "/>
            <polygon className="rb642" points="819,374.67 792,362.67 819,344.67 "/>
            <polygon className="rb643" points="801,278.67 792,362.67 819,344.67 "/>
            <polygon className="rb644" points="789,308.67 792,362.67 801,278.67 "/>
            <polygon className="rb645" points="777,341.67 792,362.67 789,308.67 "/>
            <polygon className="rb646" points="798,266.67 801,278.67 789,308.67 "/>
            <polygon className="rb647" points="792,275.67 789,308.67 798,266.67 "/>
            <polygon className="rb648" points="780,278.67 789,308.67 792,275.67 "/>
            <polygon className="rb649" points="777,341.67 747,329.67 789,308.67 "/>
            <polygon className="rb650" points="789,308.67 747,329.67 780,278.67 "/>
            <polygon className="rb651" points="744,278.67 747,329.67 780,278.67 "/>
            <polygon className="rb652" points="759,272.67 744,278.67 780,278.67 "/>
            <polygon className="rb653" points="768,269.67 759,272.67 780,278.67 "/>
            <polygon className="rb654" points="792,275.67 768,269.67 780,278.67 "/>
            <polygon className="rb655" points="798,266.67 768,269.67 792,275.67 "/>
            <polygon className="rb656" points="795,257.67 768,269.67 798,266.67 "/>
            <polygon className="rb657" points="780,257.67 768,269.67 795,257.67 "/>
            <polygon className="rb658" points="765,263.67 780,257.67 768,269.67 "/>
            <polygon className="rb659" points="744,278.67 765,263.67 759,272.67 "/>
            <polygon className="rb660" points="768,269.67 765,263.67 759,272.67 "/>
            <polygon className="rb661" points="744,278.67 765,263.67 747,266.67 "/>
            <polygon className="rb662" points="702,260.67 747,266.67 744,278.67 "/>
            <polygon className="rb663" points="690,251.67 747,266.67 702,260.67 "/>
            <polygon className="rb664" points="678,257.67 663,233.67 690,251.67 "/>
            <polygon className="rb665" points="702,260.67 690,251.67 678,257.67 "/>
            <polygon className="rb666" points="663,257.67 663,233.67 678,257.67 "/>
            <polygon className="rb667" points="651,257.67 663,233.67 663,257.67 "/>
            <polygon className="rb668" points="636,239.67 651,257.67 663,233.67 "/>
            <polygon className="rb669" points="630,230.67 636,239.67 663,233.67 "/>
            <polygon className="rb670" points="609,245.67 630,230.67 636,239.67 "/>
            <polygon className="rb671" points="609,203.67 609,245.67 630,230.67 "/>
            <polygon className="rb672" points="591,233.67 609,245.67 609,203.67 "/>
            <polygon className="rb673" points="582,215.67 570,239.67 591,233.67 "/>
            <polygon className="rb674" points="609,203.67 582,215.67 591,233.67 "/>
            <polygon className="rb675" points="438,536.67 501,557.67 438,587.67 "/>
            <polygon className="rb676" points="483,515.67 438,536.67 501,557.67 "/>
            <polygon className="rb677" points="477,500.67 438,536.67 483,515.67 "/>
            <polygon className="rb678" points="444,494.67 438,536.67 477,500.67 "/>
            <polygon className="rb679" points="444,440.67 477,500.67 444,494.67 "/>
            <polygon className="rb680" points="474,431.67 444,440.67 477,500.67 "/>
            <polygon className="rb681" points="432,410.67 474,431.67 444,440.67 "/>
            <polygon className="rb682" points="489,380.67 432,410.67 474,431.67 "/>
            <polygon className="rb683" points="408,380.67 432,410.67 489,380.67 "/>
            <polygon className="rb684" points="447,344.67 489,380.67 387,362.67 "/>
            <polygon className="rb685" points="408,380.67 387,362.67 489,380.67 "/>
            <polygon className="rb686" points="375,359.67 447,344.67 387,362.67 "/>
            <polygon className="rb687" points="411,536.67 420,494.67 438,536.67 "/>
            <polygon className="rb688" points="387,518.67 420,494.67 411,536.67 "/>
            <polygon className="rb689" points="405,482.67 387,518.67 420,494.67 "/>
            <polygon className="rb690" points="390,476.67 387,518.67 405,482.67 "/>
            <polygon className="rb691" points="381,482.67 387,518.67 390,476.67 "/>
            <polygon className="rb692" points="366,488.67 381,482.67 387,518.67 "/>
            <polygon className="rb693" points="360,464.67 366,488.67 381,482.67 "/>
            <polygon className="rb694" points="357,461.67 366,488.67 360,464.67 "/>
            <polygon className="rb695" points="360,440.67 360,464.67 357,461.67 "/>
            <polygon className="rb696" points="420,485.67 420,494.67 405,482.67 "/>
            <polygon className="rb697" points="414,476.67 405,482.67 420,485.67 "/>
            <polygon className="rb698" points="411,464.67 405,482.67 414,476.67 "/>
            <polygon className="rb699" points="390,476.67 411,464.67 405,482.67 "/>
            <polygon className="rb700" points="420,449.67 390,476.67 411,464.67 "/>
            <polygon className="rb701" points="381,482.67 390,476.67 360,464.67 "/>
            <polygon className="rb702" points="381,464.67 390,476.67 360,464.67 "/>
            <polygon className="rb703" points="372,446.67 360,464.67 381,464.67 "/>
            <polygon className="rb704" points="360,440.67 360,464.67 372,446.67 "/>
            <polygon className="rb705" points="420,494.67 438,536.67 444,494.67 "/>
            <polygon className="rb706" points="420,485.67 444,494.67 420,494.67 "/>
            <polygon className="rb707" points="444,440.67 420,485.67 444,494.67 "/>
            <polygon className="rb708" points="414,476.67 444,440.67 420,485.67 "/>
            <polygon className="rb709" points="411,464.67 444,440.67 414,476.67 "/>
            <polygon className="rb710" points="417,452.67 411,464.67 444,440.67 "/>
            <polygon className="rb711" points="420,449.67 417,452.67 444,440.67 "/>
            <polygon className="rb712" points="414,446.67 444,440.67 420,449.67 "/>
            <polygon className="rb713" points="432,410.67 414,446.67 444,440.67 "/>
            <polygon className="rb714" points="408,413.67 414,446.67 432,410.67 "/>
            <polygon className="rb715" points="408,380.67 408,413.67 432,410.67 "/>
            <polygon className="rb716" points="390,383.67 408,380.67 408,413.67 "/>
            <polygon className="rb717" points="387,362.67 390,383.67 408,380.67 "/>
            <polygon className="rb718" points="366,368.67 387,362.67 375,359.67 "/>
            <polygon className="rb719" points="369,377.67 387,362.67 390,383.67 "/>
            <polygon className="rb720" points="366,368.67 369,377.67 387,362.67 "/>
            <polygon className="rb721" points="360,395.67 354,389.67 366,368.67 "/>
            <polygon className="rb722" points="369,377.67 366,368.67 360,395.67 "/>
            <polygon className="rb723" points="348,407.67 354,389.67 360,395.67 "/>
            <path className="rb724" d="M354,452.67c0-3-6-45-6-45l12,33L354,452.67z"/>
            <polygon className="rb725" points="360,395.67 348,407.67 360,440.67 "/>
            <polygon className="rb726" points="357,461.67 354,452.67 360,440.67 "/>
            <polygon className="rb727" points="372,446.67 360,440.67 381,437.67 "/>
            <polygon className="rb728" points="372,407.67 360,440.67 381,437.67 "/>
            <polygon className="rb729" points="387,392.67 381,437.67 372,407.67 "/>
            <polygon className="rb730" points="396,425.67 408,413.67 408,419.67 "/>
            <polygon className="rb731" points="396,392.67 396,425.67 408,413.67 "/>
            <polygon className="rb732" points="387,392.67 396,392.67 381,437.67 "/>
            <polygon className="rb732" points="396,425.67 396,392.67 381,437.67 "/>
            <polygon className="rb733" points="390,476.67 420,449.67 414,446.67 "/>
            <polygon className="rb734" points="408,413.67 408,419.67 414,446.67 "/>
            <polygon className="rb735" points="396,425.67 381,464.67 408,419.67 "/>
            <polygon className="rb736" points="381,437.67 381,464.67 396,425.67 "/>
            <polygon className="rb737" points="372,446.67 381,437.67 381,464.67 "/>
            <polygon className="rb738" points="408,419.67 381,464.67 390,476.67 "/>
            <polygon className="rb739" points="414,446.67 390,476.67 408,419.67 "/>
            <polygon className="rb740" points="369,377.67 387,392.67 390,383.67 "/>
            <polygon className="rb741" points="396,392.67 390,383.67 387,392.67 "/>
            <polygon className="rb742" points="360,395.67 369,377.67 387,392.67 "/>
            <polygon className="rb743" points="372,407.67 360,395.67 387,392.67 "/>
            <polygon className="rb744" points="360,440.67 360,395.67 372,407.67 "/>
            <polygon className="rb745" points="489,380.67 501,269.67 522,362.67 "/>
            <polygon className="rb746" points="489,380.67 501,269.67 447,344.67 "/>
            <polygon className="rb747" points="501,269.67 438,311.67 447,344.67 "/>
            <polygon className="rb748" points="438,257.67 501,269.67 438,311.67 "/>
            <polygon className="rb749" points="522,242.67 438,257.67 501,269.67 "/>
            <polygon className="rb750" points="477,215.67 438,257.67 522,242.67 "/>
            <polygon className="rb751" points="525,203.67 477,215.67 522,242.67 "/>
            <polygon className="rb752" points="447,344.67 372,341.67 375,359.67 "/>
            <polygon className="rb753" points="372,323.67 447,344.67 372,341.67 "/>
            <polygon className="rb754" points="438,311.67 372,323.67 447,344.67 "/>
            <polygon className="rb755" points="438,257.67 372,323.67 438,311.67 "/>
            <polygon className="rb756" points="378,260.67 372,323.67 438,257.67 "/>
            <polygon className="rb757" points="378,239.67 378,260.67 438,257.67 "/>
            <polygon className="rb758" points="393,182.67 438,257.67 378,239.67 "/>
            <polygon className="rb208" points="405,170.67 438,257.67 393,182.67 "/>
            <polygon className="rb759" points="390,149.67 477,215.67 405,170.67 "/>
            <polygon className="rb759" points="438,257.67 405,170.67 477,215.67 "/>
            <polygon className="rb760" points="423,158.67 390,149.67 477,215.67 "/>
            <polygon className="rb758" points="435,134.67 477,215.67 423,158.67 "/>
            <polygon className="rb761" points="447,110.67 444,92.67 435,134.67 "/>
            <polygon points="477,215.67 447,110.67 435,134.67 "/>
            <polygon className="rb759" points="525,203.67 447,110.67 477,215.67 "/>
            <path className="rb762" d="M546,209.67c0-3-99-99-99-99l78,93L546,209.67z"/>
            <polygon className="rb763" points="474,77.67 447,113.67 471,62.67 "/>
            <polygon className="rb764" points="483,80.67 474,77.67 486,56.67 "/>
            <polygon className="rb765" points="447,110.67 474,77.67 483,80.67 "/>
            <polygon className="rb766" points="546,209.67 483,80.67 447,110.67 "/>
            <polygon className="rb767" points="510,44.67 510,29.67 483,77.67 "/>
            <polygon className="rb768" points="534,65.67 549,14.67 510,44.67 "/>
            <polygon className="rb769" points="483,80.67 510,44.67 534,65.67 "/>
            <polygon className="rb770" points="546,209.67 483,80.67 534,65.67 "/>
            <polygon className="rb771" points="561,11.67 534,65.67 555,47.67 "/>
            <polygon className="rb772" points="573,197.67 534,65.67 546,209.67 "/>
            <polygon className="rb773" points="555,47.67 534,65.67 606,26.67 "/>
            <polygon className="rb774" points="630,5.67 621,29.67 606,26.67 "/>
            <polygon className="rb775" points="600,11.67 555,47.67 606,26.67 "/>
            <polygon className="rb775" points="534,65.67 606,26.67 621,29.67 "/>
            <polygon className="rb776" points="642,41.67 621,29.67 534,65.67 "/>
            <polygon className="rb777" points="645,14.67 621,29.67 642,41.67 "/>
            <polygon className="rb778" points="534,65.67 642,41.67 675,71.67 "/>
            <polygon className="rb758" points="573,197.67 534,65.67 675,71.67 "/>
            <polygon className="rb779" points="726,65.67 702,47.67 675,71.67 "/>
            <polygon className="rb780" points="573,197.67 609,203.67 582,215.67 "/>
            <polygon className="rb781" points="675,71.67 573,197.67 609,203.67 "/>
            <polygon className="rb782" points="726,65.67 609,203.67 675,71.67 "/>
            <polygon className="rb783" points="783,458.67 771,452.67 780,458.67 "/>
            <polygon className="rb784" points="609,203.67 639,206.67 630,230.67 "/>
            <polygon className="rb785" points="726,65.67 609,203.67 639,206.67 "/>
            <polygon className="rb786" points="741,65.67 732,56.67 726,65.67 "/>
            <polygon className="rb787" points="639,206.67 741,65.67 726,65.67 "/>
            <polygon className="rb788" points="663,233.67 639,206.67 630,230.67 "/>
            <polygon className="rb789" points="747,89.67 639,206.67 741,65.67 "/>
            <polygon className="rb790" points="762,101.67 663,233.67 747,89.67 "/>
            <polygon className="rb791" points="639,206.67 663,233.67 747,89.67 "/>
            <polygon className="rb792" points="777,146.67 762,101.67 663,233.67 "/>
            <polygon className="rb793" points="690,251.67 777,146.67 663,233.67 "/>
            <polygon className="rb766" points="747,266.67 777,146.67 690,251.67 "/>
            <polygon className="rb794" points="765,263.67 777,146.67 747,266.67 "/>
            <polygon className="rb795" points="780,257.67 777,146.67 765,263.67 "/>
            <polygon className="rb796" points="795,257.67 777,146.67 780,257.67 "/>
            <polygon className="rb797" points="795,101.67 777,146.67 798,155.67 "/>
            <polygon className="rb798" points="795,179.67 777,146.67 798,155.67 "/>
            <polygon className="rb799" points="801,233.67 795,179.67 777,146.67 "/>
            <polygon className="rb800" points="795,257.67 777,146.67 801,233.67 "/>
            <polygon className="rb801" points="822,275.67 801,233.67 795,257.67 "/>
            <polygon className="rb802" points="813,290.67 822,275.67 795,257.67 "/>
            <polygon className="rb803" points="819,332.67 813,290.67 795,257.67 "/>
            <polygon className="rb804" points="819,344.67 795,257.67 819,332.67 "/>
            <path className="rb632" d="M777,146.67"/>
            <polygon className="rb805" points="447,947.67 471,932.67 462,944.67 "/>
            <polygon className="rb806" points="438,953.67 447,947.67 456,953.67 "/>
            <polygon className="rb806" points="462,944.67 447,947.67 456,953.67 "/>
            <polygon className="rb807" points="504,938.67 462,944.67 504,953.67 "/>
            <polygon className="rb808" points="456,953.67 462,944.67 504,953.67 "/>
            <polygon className="rb809" points="552,932.67 504,938.67 504,953.67 "/>
            <polygon className="rb810" points="552,953.67 552,932.67 504,953.67 "/>
            <polygon className="rb811" points="579,917.67 552,932.67 552,953.67 "/>
            <polygon className="rb812" points="615,914.67 552,953.67 579,917.67 "/>
            <polygon className="rb813" points="684,893.67 552,953.67 615,914.67 "/>
            <polygon className="rb814" points="789,908.67 552,953.67 684,893.67 "/>
            <polygon className="rb815" points="753,935.67 789,908.67 552,953.67 "/>
            <polygon className="rb816" points="741,953.67 552,953.67 753,935.67 "/>
            <polygon className="rb817" points="798,953.67 753,935.67 741,953.67 "/>
            <polygon className="rb818" points="840,905.67 753,935.67 798,953.67 798,953.67 "/>
            <polygon className="rb809" points="789,908.67 753,935.67 840,905.67 "/>
            <polygon className="rb819" points="852,884.67 840,905.67 831,872.67 "/>
            <polygon className="rb820" points="849,842.67 831,872.67 852,884.67 "/>
            <polygon className="rb821" points="942,830.67 849,842.67 852,884.67 "/>
            <polygon className="rb820" points="852,815.67 942,830.67 849,842.67 "/>
            <polygon className="rb805" points="873,803.67 852,815.67 942,830.67 "/>
            <polygon className="rb821" points="894,902.67 852,884.67 942,830.67 "/>
            <polygon className="rb822" points="840,905.67 852,884.67 894,902.67 "/>
            <polygon className="rb823" points="852,953.67 840,905.67 894,902.67 "/>
            <polygon className="rb824" points="798,953.67 840,905.67 852,953.67 "/>
            <polygon className="rb825" points="924,953.67 894,902.67 852,953.67 "/>
            <polygon className="rb820" points="933,914.67 894,902.67 924,953.67 "/>
            <polygon className="rb826" points="951,875.67 894,902.67 933,914.67 "/>
            <polygon className="rb827" points="942,830.67 951,875.67 894,902.67 "/>
            <polygon className="rb828" points="951,833.67 951,875.67 942,830.67 "/>
            <polygon className="rb828" points="951,833.67 951,875.67 942,830.67 "/>
            <path className="rb828" d="M978,851.67"/>
            <polygon className="rb815" points="951,833.67 951,875.67 954,836.67 "/>
            <polygon className="rb829" points="978,851.67 951,875.67 951,833.67 "/>
            <polygon className="rb830" points="1005,863.67 996,860.67 993,869.67 "/>
            <polygon className="rb831" points="978,851.67 996,860.67 993,869.67 "/>
            <polygon className="rb832" points="951,875.67 978,851.67 993,869.67 "/>
            <polygon className="rb833" points="972,896.67 951,875.67 993,869.67 "/>
            <polygon className="rb833" points="933,914.67 951,875.67 972,896.67 "/>
            <polygon className="rb834" points="954,953.67 933,914.67 972,896.67 "/>
            <polygon className="rb831" points="924,953.67 933,914.67 954,953.67 "/>
            <polygon className="rb835" points="1083,926.67 1098,953.67 954,953.67 "/>
            <polygon className="rb836" points="1038,875.67 954,953.67 1083,926.67 "/>
            <polygon className="rb837" points="972,896.67 954,953.67 1038,875.67 "/>
            <polygon className="rb838" points="1017,857.67 993,869.67 1038,875.67 "/>
            <polygon className="rb839" points="972,896.67 993,869.67 1038,875.67 "/>
            <polygon className="rb840" points="972,827.67 1017,857.67 1005,863.67 "/>
            <polygon className="rb828" points="978,851.67 972,827.67 996,860.67 "/>
            <polygon className="rb805" points="1005,863.67 972,827.67 996,860.67 "/>
            <polygon className="rb841" points="951,833.67 972,827.67 978,851.67 "/>
            <polygon className="rb825" points="909,794.67 972,827.67 951,833.67 "/>
            <polygon className="rb842" points="900,794.67 942,830.67 909,794.67 "/>
            <polygon className="rb843" points="873,803.67 942,830.67 900,794.67 "/>
            <polygon className="rb844" points="951,833.67 909,794.67 942,830.67 "/>
            <polygon className="rb845" points="843,758.67 900,794.67 873,803.67 "/>
            <polygon className="rb846" points="822,794.67 843,758.67 873,803.67 "/>
            <polygon className="rb837" points="789,791.67 843,758.67 822,794.67 "/>
            <polygon className="rb847" points="780,761.67 843,758.67 789,791.67 "/>
            <polygon className="rb848" points="759,722.67 759,725.67 843,758.67 "/>
            <polygon className="rb849" points="780,761.67 759,725.67 843,758.67 "/>
            <polygon className="rb201" points="747,701.67 735,719.67 759,722.67 "/>
            <polygon className="rb850" points="759,725.67 759,722.67 735,719.67 "/>
            <polygon className="rb200" points="780,761.67 735,719.67 735,719.67 759,725.67 "/>
            <polygon className="rb200" points="720,758.67 735,719.67 780,761.67 "/>
            <polygon className="rb200" points="708,779.67 720,758.67 780,761.67 "/>
            <polygon className="rb205" points="789,791.67 708,779.67 780,761.67 "/>
            <polygon className="rb204" points="687,794.67 708,779.67 789,791.67 "/>
            <polygon className="rb851" points="792,839.67 789,791.67 687,794.67 "/>
            <polygon className="rb200" points="663,800.67 792,839.67 687,794.67 "/>
            <polygon className="rb200" points="627,794.67 663,800.67 603,839.67 "/>
            <polygon className="rb200" points="651,872.67 603,839.67 663,800.67 "/>
            <polygon className="rb201" points="663,800.67 651,872.67 735,884.67 "/>
            <polygon className="rb204" points="792,839.67 663,800.67 735,884.67 "/>
            <polygon className="rb209" points="759,893.67 792,839.67 735,884.67 "/>
            <polygon className="rb852" points="792,896.67 792,839.67 759,893.67 "/>
            <polygon className="rb819" points="831,872.67 789,908.67 840,905.67 "/>
            <polygon className="rb819" points="792,896.67 789,908.67 759,893.67 "/>
            <polygon className="rb853" points="735,884.67 759,893.67 789,908.67 "/>
            <polygon className="rb819" points="684,893.67 735,884.67 789,908.67 "/>
            <polygon className="rb850" points="651,872.67 684,893.67 735,884.67 "/>
            <polygon className="rb209" points="651,872.67 615,914.67 684,893.67 "/>
            <polygon className="rb850" points="603,839.67 651,872.67 615,914.67 "/>
            <polygon className="rb854" points="582,854.67 603,839.67 615,914.67 "/>
            <polygon className="rb855" points="579,917.67 582,854.67 615,914.67 "/>
            <polygon className="rb851" points="552,932.67 582,854.67 579,917.67 "/>
            <polygon className="rb856" points="558,869.67 552,932.67 582,854.67 "/>
            <polygon className="rb201" points="477,923.67 558,869.67 552,932.67 "/>
            <polygon className="rb857" points="462,944.67 552,932.67 471,932.67 "/>
            <polygon className="rb809" points="477,923.67 552,932.67 471,932.67 "/>
            <polygon className="rb858" points="792,839.67 789,791.67 822,794.67 "/>
            <polygon className="rb859" points="852,815.67 822,794.67 873,803.67 "/>
            <polygon className="rb860" points="849,842.67 822,794.67 852,815.67 "/>
            <polygon className="rb861" points="792,839.67 822,794.67 849,842.67 "/>
            <polygon className="rb862" points="831,872.67 792,839.67 849,842.67 "/>
            <polygon className="rb807" points="792,896.67 792,839.67 831,872.67 "/>
            <polygon className="rb814" points="789,908.67 792,896.67 831,872.67 "/>
            <polygon className="rb759" points="297,827.67 288,875.67 297,953.67 "/>
            <polygon className="rb863" points="261,839.67 141,953.67 282,803.67 "/>
            <polygon className="rb809" points="504,953.67 454.78,953.67 456,992.67 "/>
            <polygon className="rb814" points="504,953.67 582,1007.67 552,953.67 "/>
            <polygon className="rb819" points="741,953.67 582,1007.67 552,953.67 "/>
            <polygon className="rb818" points="798,953.67 750,1004.67 741,953.67 "/>
            <polygon className="rb818" points="851.33,953.67 933,1007.67 797.33,953.67 797.33,953.67 "/>
            <polygon className="rb831" points="851.33,953.67 933,1007.67 924,953.67 "/>
            <polygon className="rb823" points="954,953.67 933,1007.67 924,953.67 "/>
            <polyline className="rb820" points="1098,953.67 933,1007.67 954,953.67 1098,953.67 "/>
            <polygon className="rb831" points="741,953.67 750,1004.67 582,1007.67 "/>
            <polygon className="rb831" points="456,992.67 582,1007.67 504,953.67 "/>
            <polygon className="rb814" points="456,992.67 525,1037.67 582,1007.67 "/>
            <polygon className="rb805" points="296.92,953.67 356.92,1034.67 456,992.67 "/>
            <path className="rb864" d="M798,596.67"/>
            <path className="rb865" d="M816,398.67"/>
            <path className="rb865" d="M816,398.67"/>
            <g>
              <polygon className="rb198" points="141,818.67 9,914.67 141,854.67 	"/>
            </g>
            <g>
              <polygon className="rb196" points="141,953.67 3,917.67 141,854.67 	"/>
            </g>
            <g>
              <polygon className="rb195" points="219,953.67 213,1028.67 141,953.67 	"/>
            </g>
            <polygon className="rb195" points="261,953.67 213,1028.67 219,953.67 "/>
            <polygon className="rb195" points="297,953.67 356.92,1034.67 261,953.67 "/>
            <polygon className="rb199" points="438,953.67 297,953.67 456,992.67 "/>
            <polygon className="rb197" points="456,953.67 438,953.67 456,992.67 "/>
            <polygon className="rb201" points="141,953.67 111,1019.67 213,1028.67 "/>
          </svg>
        </div>

      </Waypoint>
    );
  }
}


export default MeSVG;
