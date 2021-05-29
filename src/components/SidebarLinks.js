// import React, { useState } from "react";
// import styled from "styled-components";

// const SidebarLinks = ({ number, type }) => {
//   const [linkActive, setLinkActive] = useState(false);
//   console.log(linkActive);

//   return (
//     <Link
//       onClick={() => setLinkActive(!linkActive)}
//       className={linkActive ? "active" : ""}
//     >
//       <p>
//         {number}
//         <a href="#">{type}</a>
//       </p>
//     </Link>
//   );
// };

// const Link = styled.li`
//   padding: 0 1rem 1.5rem 1rem;
//   width: 100%;
//   border-bottom: 1px solid rgba(131, 136, 143, 0.3);
//   cursor: pointer;
//   transition: all 0.2s;

//   &.active {
//     p {
//       color: #0e8784;
//       opacity: 1;

//       a {
//         color: #2c343e;
//       }
//     }
//   }

//   &:hover {
//     transform: translateX(1rem);
//   }

//   &:not(:first-child) {
//     margin-top: 1.5rem;
//   }

//   &:nth-last-child(1) {
//     border: none;
//   }

//   p {
//     font-size: 2vw;
//     color: #848990;
//     opacity: 0.5;
//     font-family: "Fraunces", sans-serif;
//     font-weight: 700;

//     a {
//       color: #848990;
//       margin-left: 1.5rem;
//       text-decoration: none;
//     }
//   }
// `;

// export default SidebarLinks;
