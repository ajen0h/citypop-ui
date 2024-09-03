import { ReactNode, useState } from 'react';

interface DialogProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 " onClick={onClose}></div>
            <div className="fixed inset-0 flex items-center justify-center  ">
                <div className="bg-white  rounded  shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4  bg-background p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-[425px] h-[225px]">
                    
                    {children}
                </div>
            </div>
        </>
    );
};

export default function DialogComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <div className="p-4">
            <button onClick={openDialog} className='shadow-[3px_3px_0_#170f06] border-2 border-[#170f06] font-medium p-2 rounded-2xl hover:text-white hover:bg-[#170f06] transition-all uppercase'>Open Dialog</button>
            <Dialog isOpen={isOpen} onClose={closeDialog}>
                <h2 className="text-lg font-bold mb-4">Dialog Title</h2>
                <p>This is the content of the dialog.</p>
                
                <button type="button" className="rounded-lg border-2 border-[#170f06] absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" onClick={closeDialog}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x h-4 w-4" ><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span className="sr-only" >Close</span></button>
            </Dialog>
        </div>
    );

}
