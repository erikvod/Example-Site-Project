import {
  Nav,
  NavItem,
  NavList,
  PageSidebar,
  PageSidebarBody,
} from "@patternfly/react-core";

export default function Sidebar() {
  return (
    <>
      <PageSidebar>
        <PageSidebarBody>
          <Nav>
            <NavList>
              <NavItem id="sendToUser" to="/users">
              User
              </NavItem>
            </NavList>
          </Nav>
          <Nav>
            <NavList>
              <NavItem id="sendToPosts" to="/Posts">
                Posts
              </NavItem>
            </NavList>
          </Nav>
          <Nav>
            <NavList>
              <NavItem id="sendToComments" to="/Comments">
                Comments
              </NavItem>
            </NavList>
          </Nav>
        </PageSidebarBody>
      </PageSidebar>
    </>
  );
}
