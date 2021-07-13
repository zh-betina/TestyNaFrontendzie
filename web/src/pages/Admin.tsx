import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ProductsConfiguration } from "../organisms/ProductsConfiguration";
import Container from "../templates/Container";
import { Login } from "../organisms/Login";
import { Logout } from "../organisms/Logout";
import { useUser } from "../userContext/UserContext";
import Button from "../atoms/Button";
import { NewProductForm } from "../organisms/NewProductForm";

const Admin = () => {
  const { t } = useTranslation();
  const [addNewProductOpen, setAddNewProductOpen] = useState<{
    open: boolean;
    mode: "edit" | "new";
    prodId?: string;
  }>({ open: false, mode: "new" });
  const {
    state: { user },
  } = useUser();

  if (!user) {
    return (
      <Container>
        <Login />
      </Container>
    );
  }

  const toggleProductForm = (mode: "new" | "edit", prodId?: string) => {
    setAddNewProductOpen({ open: !addNewProductOpen.open, mode, prodId });
  };

  const onNewProductOpen = () => {
    toggleProductForm("new");
  };

  const onEdit = (id: string) => {
    toggleProductForm("edit", id);
  };

  const onNewProductSubmit = () => {
    toggleProductForm("new");
  };

  return (
    <>
      <StyledContainer>
        <LogoutContainer>
          <Button onClick={onNewProductOpen}>{t("Add new product")}</Button>
          <Logout />
        </LogoutContainer>
        <ProductsContainer>
          <ProductsConfiguration onEdit={onEdit} />
        </ProductsContainer>
      </StyledContainer>
      {addNewProductOpen.open && (
        <Container>
          <NewProductForm
            prodId={addNewProductOpen.prodId}
            mode={addNewProductOpen.mode}
            onSubmit={onNewProductSubmit}
          />
        </Container>
      )}
    </>
  );
};

export default Admin;

const StyledContainer = styled(Container)`
  position: relative;
`;

const LogoutContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const ProductsContainer = styled.div`
  padding-top: 30px;
`;
