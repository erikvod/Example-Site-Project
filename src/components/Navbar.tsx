import {
  Avatar,
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/js/icons/bars-icon";
import imgAvatar from "@patternfly/react-core/src/components/assets/avatarImg.svg";
import { PageToggleButton } from "@patternfly/react-core";

export default function Header() {
  return (
    <>
      <Masthead>
        <MastheadMain>
          <MastheadToggle>
            <PageToggleButton variant="tertiary">
              <BarsIcon />
            </PageToggleButton>
          </MastheadToggle>
        </MastheadMain>
        <MastheadContent>
          <Toolbar>
            <ToolbarContent>
              <ToolbarGroup align={{ default: "alignRight" }}>
                <span style={{ paddingRight: ".5rem" }}>
                  Username&nbsp;&nbsp;
                </span>
                <Avatar src={imgAvatar} alt="avatar" />
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    </>
  );
}
