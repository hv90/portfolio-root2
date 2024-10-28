import {
  SlAvatar,
  SlButton,
  SlDrawer,
  SlTooltip,
} from "@shoelace-style/shoelace/dist/react";
import BurgerIcon from "/shoelace/dist/assets/icons/list.svg";
import { CSSProperties, useRef } from "react";

const Header: React.FC<{
  style?: CSSProperties;
  className?: string;
  onGoToSection1?: () => void;
  onGoToSection2?: () => void;
  onGoToSection3?: () => void;
  onGoToSection4?: () => void;
}> = ({
  onGoToSection1,
  onGoToSection2,
  onGoToSection3,
  onGoToSection4,
  style,
  className,
}) => {
  const drawerRef = useRef<any | null>(null);
  return (
    <header className={className} style={style}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="w-4/5 flex justify-between items-center">
        <SlButton
          circle
          href="https://www.linkedin.com/in/hv90-m182"
          target="_blank"
          style={{ background: "transparent" }}
        >
          <SlTooltip content="Contato de Hugo Almeida" placement="right-end">
            <SlAvatar
              style={{ background: "transparent" }}
              image="https://media.licdn.com/dms/image/v2/C4E03AQHWqvZQjnsJlw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1515984621937?e=1735776000&v=beta&t=aYF87kyN-9EdAuUpkwoAUh3sdCe92MRAPW4JE7wIqwo"
              label="Contato de Hugo Almeida"
            ></SlAvatar>
          </SlTooltip>
        </SlButton>
        <div className="hidden md:block">
          <SlButton className="mr-4" onClick={onGoToSection1}>
            Experiência
          </SlButton>
          <SlButton className="mr-4" onClick={onGoToSection2}>
            Interesse
          </SlButton>
          <SlButton className="mr-4" onClick={onGoToSection3}>
            POCs
          </SlButton>
          <SlButton className="mr-4" onClick={onGoToSection4}>
            Novidades
          </SlButton>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center justify-center p-1 rounded bg-white"
            onClick={() => {
              drawerRef.current.show();
            }}
          >
            <img src={BurgerIcon} height={"18px"} width={"18px"} />
          </button>
        </div>
      </div>
      <SlDrawer
        ref={drawerRef}
        placement="end"
        className="drawer-placement-end block md:hidden"
        style={{ maxWidth: "60px" }}
      >
        <div className="w-full flex flex-col justify-between items-center">
          <SlButton variant="text" className="mr-4" onClick={onGoToSection1}>
            Experiência
          </SlButton>
          <SlButton variant="text" className="mr-4" onClick={onGoToSection2}>
            Interesse
          </SlButton>
          <SlButton variant="text" className="mr-4" onClick={onGoToSection3}>
            POCs
          </SlButton>
          <SlButton variant="text" className="mr-4" onClick={onGoToSection4}>
            Novidades
          </SlButton>
        </div>
      </SlDrawer>
    </header>
  );
};

export default Header;
