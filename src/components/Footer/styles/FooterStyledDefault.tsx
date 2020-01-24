import styled from "../../../styles/theme";
import { FooterTemplateDefault } from "../templates/FooterTemplateDefault";

export const FooterStyledDefault = styled(FooterTemplateDefault)`
    color: ${({ theme }) => theme.colors.primary};
`;
