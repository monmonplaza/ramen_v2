import { ImagePlusIcon, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'Yup';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputText, InputTextArea } from "@/components/helpers/formInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";

const DrinksModalAdd = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsAdd(false))


  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/drinks/${itemEdit.drinks_aid}` :`/v2/drinks`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["drinks"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`))
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))
      }
    },
  });



  const initVal = {
    drinks_title: itemEdit ? itemEdit.drinks_title : '',
    drinks_price: itemEdit ? itemEdit.drinks_price : '',
    drinks_description: itemEdit ? itemEdit.drinks_description : '',
    drinks_category: itemEdit ? itemEdit.drinks_category : '',
    drinks_title_old: itemEdit ? itemEdit.drinks_title : '',
  }

  const yupSchema = Yup.object({
    drinks_title: Yup.string().required('Required'),
    drinks_price: Yup.string().required('Required'),
    drinks_description: Yup.string().required('Required'),
    drinks_category: Yup.string().required('Required'),
  })


  return (
    <ModalWrapper>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
            <Form >
              <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
                <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
                  <h5 className="mb-0">{itemEdit ? "Edit" : "Add"} Drink</h5>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>

                <div className="modal-body  p-3 px-4 ">
                  <div className="input-wrap">
                      <InputText
                      label="Drink"
                      type="text"
                      name="drinks_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap">
                    <InputText
                      label="Price"
                      type="text"
                      name="drinks_price"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap">
                    <InputText
                      label="Category"
                      type="text"
                      name="drinks_category"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap relative">
                    <InputTextArea
                      label="Description"
                      name="drinks_description"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
                  <button
                    className="btn btn-accent min-w-[90px] flex justify-center"
                    type="submit"
                  >
                    {mutation.isPending ? <SpinnerButton/> : 'Save'} 
                  </button>
                  <button
                    className="btn btn-cancel min-w-[90px] flex justify-center"
                    type="reset"
                    onClick={handleClose}
                    
                  >
                    Cancel
                  </button>
                </div>
              </div>
              </Form>
            );
          }}
        </Formik>
          
    </ModalWrapper>
  );
};

export default DrinksModalAdd;
