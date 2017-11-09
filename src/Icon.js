import React from "react";

const icons = {
  search: {
    path:
      "M 15.0714 15.1026L 19.8441 19.8852C 20.1305 20.1721 20.035 20.6504 19.7487 20.9374C 19.4624 21.2243 18.9851 21.2243 18.6987 20.9374L 13.926 16.1548L 13.926 16.0591C 12.2078 17.3982 9.91687 18.0678 7.53052 17.6852C 2.75781 16.92 -0.583129 12.5199 0.0850842 7.64171C 0.848756 2.76341 5.33508 -0.584363 10.1078 0.0851923C 14.8805 0.85039 18.2214 5.25041 17.5532 10.1286C 17.2668 12.1374 16.4078 13.7634 15.0714 15.1026ZM 1.51697 7.83299C 0.944215 11.946 3.80786 15.6765 7.8169 16.2504C 11.8261 16.8243 15.6442 13.9548 16.2169 9.93737C 16.7897 5.82433 13.926 2.09386 9.91699 1.51995C 5.81238 0.946032 2.08972 3.8156 1.51697 7.83299Z",
    fillRule: "evenodd"
  },
  star: {
    path:
      "M 11.9519 4.51713C 12.0653 4.87132 11.9771 5.14961 11.6998 5.36465L 8.84996 7.54162L 9.94653 11.0847C 10.0852 11.5781 9.71965 12.0335 9.2659 12.0335C 9.11465 12.0335 8.976 11.9829 8.84996 11.8817L 6.00015 9.70595L 3.15033 11.8829C 2.83523 12.098 2.40668 12.0347 2.1672 11.7311C 2.01595 11.5287 1.97814 11.3137 2.06637 11.086L 3.15033 7.56819L 0.287913 5.36465C 0.0232244 5.14961 -0.0650052 4.87132 0.0484328 4.51713C 0.149267 4.21354 0.413955 4.01115 0.703852 4.01115L 4.23429 4.01115L 5.33086 0.49333C 5.41909 0.202392 5.68378 0 5.98628 0C 6.30139 0 6.57868 0.215041 6.66691 0.518629L 7.76348 4.01115L 11.2939 4.01115C 11.5863 4.01115 11.851 4.21354 11.9519 4.51713Z"
  },
  rightSmall: {
    path:
      "M 0.162625 0.948459C 0.0222992 0.808033 -0.0324514 0.603412 0.0189974 0.411674C 0.0704463 0.219935 0.220278 0.070209 0.412053 0.0188958C 0.603828 -0.0324175 0.80841 0.0224778 0.948736 0.162903L 5.3904 4.60735C 5.60728 4.82429 5.60728 5.17596 5.3904 5.3929L 0.948736 9.83735C 0.80841 9.97777 0.603828 10.0327 0.412053 9.98135C 0.220278 9.93004 0.0704463 9.78032 0.0189974 9.58858C -0.0324514 9.39684 0.0222992 9.19222 0.162625 9.05179L 4.21263 5.00013L 0.162625 0.948459Z"
  },
  right: {
    path:
      "M 0.292725 1.70723C 0.0401386 1.45446 -0.0584125 1.08614 0.0341954 0.741012C 0.126803 0.395883 0.396501 0.126376 0.741695 0.0340124C 1.08689 -0.0583514 1.45514 0.04046 1.70773 0.293225L 9.70273 8.29323C 10.0931 8.68373 10.0931 9.31673 9.70273 9.70723L 1.70773 17.7072C 1.45514 17.96 1.08689 18.0588 0.741695 17.9664C 0.396501 17.8741 0.126803 17.6046 0.0341954 17.2594C -0.0584125 16.9143 0.0401386 16.546 0.292725 16.2932L 7.58273 9.00023L 0.292725 1.70723Z"
  }
  // google:
  //   "M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z",
  // facebook:
  //   "M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z",
  // twitter:
  //   "M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"
};

export default props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width} ${props.height}`}
  >
    <path
      d={icons[props.icon].path}
      fillRule={icons[props.icon].fillRule}
      fill={props.fill}
    />
  </svg>
);