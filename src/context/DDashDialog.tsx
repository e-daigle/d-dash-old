import React, { createContext, useContext, useState } from "react";
import { DialogConfig, DialogText } from "../../types";
import DDashDialog from "../components/DDashDialog";

interface ConfirmationDialogContextProps {
  openDialog: (config: DialogConfig) => void;
}

type Props = {
  children: React.ReactElement | React.ReactElement[];
  defaultDialogText?: DialogText;
};

//create dialog context
const ConfirmationDialogContext = createContext<ConfirmationDialogContextProps>(
  {
    openDialog: () => {},
  }
);

const ConfirmationDialogProvider = ({ children }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>({});

  const openDialog = (dialogConfig: DialogConfig) => {
    //Dialog config can only be a callback if user doesn't
    //provide his text for the dialog

    setDialogConfig(dialogConfig);
    setDialogOpen(true);
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig({});
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig.actionCallback?.(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback?.(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      <DDashDialog
        open={dialogOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        cancelButton={dialogConfig.cancelButton}
        confirmButton={dialogConfig.confirmButton}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};

const useConfirmationDialog = () => {
  const { openDialog } = useContext(ConfirmationDialogContext);

  //Will show the dialog and return the user's response
  //Callable function with useConfirmationDialog
  const getConfirmation = (options?: DialogText) =>
    new Promise<boolean>((res) => {
      openDialog({ actionCallback: res, ...options });
    });

  return { getConfirmation };
};

export { ConfirmationDialogProvider, useConfirmationDialog };
export default ConfirmationDialogContext;
