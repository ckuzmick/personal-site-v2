/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Sidenav, AccordionButton, AccordionNav } from '@theme-ui/sidenav'
import { NavLink } from 'theme-ui'
import "./sidenav.css"

export default (props) => (
<ul sx={{ marginRight:'10px' }}>
<li sx={{ textAlign:"right" }}>
  <NavLink href="/" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    Home
  </NavLink>
</li>
<li sx={{ textAlign:"right" }}>
  <NavLink href="/writing/" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    Writing
  </NavLink>
</li>
<li sx={{ textAlign:"right" }}>
  <NavLink href="#!" p={2} sx={{ paddingRight:"0", paddingLeft:"0px" }}>
    Projects
  </NavLink>
</li>
</ul>
)