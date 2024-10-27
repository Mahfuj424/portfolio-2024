import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ModalContent } from "@nextui-org/modal";
import { Modal } from "@nextui-org/modal";
import { signIn } from "next-auth/react";

const AuthModal = ({ isModalOpen, closeModal }: any) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <div className="p-6 flex flex-col items-center dark:bg-darkModal">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <button
              className="flex items-center justify-center gap-2 bg-cyan-500 text-white py-2 px-4 rounded-md mb-4"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              <FaGoogle size={20} /> Login with Google
            </button>
            <button
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              <FaGithub size={20} /> Login with GitHub
            </button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AuthModal;
