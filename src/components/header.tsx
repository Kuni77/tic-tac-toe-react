import React from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPlayer: string;
}

const Header: React.FC<HeaderProps> = ({ currentPlayer }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-blue ">Tic-Tac-Toe</h1>
        <div className="flex items-center space-x-4">
          <p className="text-xl text-blue font-bold">Player: <span className="font-bold">{currentPlayer}</span></p>
          <Button variant="outline" color="white" className="px-4 py-2 hover:bg-white hover:text-blue-600">
            Reset Game
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
