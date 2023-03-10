import FormInput from "../../../components/Forms/FormInput"
import useInput from '../../../hooks/useInput'

export default function UpdateProductPage() {
    const [title, onTitleChangeHandler] = useInput('')

    return (
        <>
            <form>
                <FormInput
                    name={'title'} type={'text'} label={'Title'}
                    placeholder={'ini judul...'}
                    onChangeHandler={onTitleChangeHandler}
                />
            </form>
        </>
    )
}