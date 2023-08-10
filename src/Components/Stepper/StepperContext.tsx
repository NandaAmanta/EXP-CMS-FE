import { createContext, useContext, useState } from "react";

interface FormData {
  websiteProfileData: any;
  navbarData: any;
  bannerData: any;
  footerData: any;
}

const StepperContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
  formData: {
    websiteProfileData: null,
    navbarData: null,
    bannerData: null,
    footerData: null,
  },
  setFormData: () => {},
});

export const useStepperContext = () => useContext(StepperContext);

export const StepperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    websiteProfileData: null,
    navbarData: null,
    bannerData: null,
    footerData: null,
  });

  return (
    <StepperContext.Provider value={{ formData, setFormData }}>
      {children}
    </StepperContext.Provider>
  );
};
