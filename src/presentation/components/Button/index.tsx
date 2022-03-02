import PropTypes from "prop-types";
import { ElementType, ButtonHTMLAttributes } from "react";
import { ButtonUI, Circle, RenderContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly icon?: ElementType;
  readonly isLoading?: Boolean;
}

type ContentRenderProps = Pick<IButtonProps, "text" | "icon" | "isLoading">;

const RenderContent: React.FC<ContentRenderProps> = ({
  text,
  icon: Icon,
  isLoading,
}) => {
  if (isLoading)
    return (
      <RenderContainer data-testid="loading">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </RenderContainer>
    );
  return (
    <>
      {Icon && <Icon data-testid="icon" />}
      {text}
    </>
  );
};

export const Button: React.FC<IButtonProps> = ({
  text,
  isLoading,
  icon: Icon,
  ...props
}) => {
  props;
  return (
    <ButtonUI {...props}>
      <RenderContent text={text} icon={Icon} isLoading={isLoading} />
    </ButtonUI>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
