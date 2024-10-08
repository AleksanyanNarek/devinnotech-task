import './messageModal.css';
import { useAppSelector } from '../../utils/customHooks';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modalSlice';

const MessageModal = () => {
    const disptach = useDispatch();
    const isModalOpen = useAppSelector(state => state.modal.isModalOpen);

    if (!isModalOpen) return null;

    setTimeout(() => {
        disptach(closeModal());
    }, 1000);

    return (
        <div className='messageModal'>
            <div className='modal_box'>
                <p>City not fount</p>
            </div>
        </div>
    )
}

export default MessageModal