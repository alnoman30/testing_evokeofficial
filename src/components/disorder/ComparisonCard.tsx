import React from 'react';
import './ComparisonCard.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
// import crossIcon from '../../assets/cross.svg';

interface ComparisonCardProps {
  factors: string[];
  evoke: boolean[];
  others: boolean[];
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ factors, evoke, others }) => {
  return (
    <div className="">
      {/* <div className="comparison-header">
        <div>Evoke</div>
        <div>Others</div>
      </div> */}
      <div className='comparison-card2'>
        <div className="comparison-row1" >
          <div className="factor" ></div>
          <div className="evoke zind"> Evoke</div>
          <div className="others" > Others</div>
        </div>
      </div>
      <div className='comparison-card'>
        {factors.map((factor, index) => (
          <div className="comparison-row" key={index}>
            <div className="factor">{factor}</div>
            <div className="evoke">{evoke[index] ? <CheckIcon className='check' /> : <CloseIcon className='check' />}</div>
            <div className="others">{others[index] ? 'May be' : <CloseIcon className='check-cross' />}</div>
          </div>
        ))}
      </div>
      <div className='comparison-card2'>
        <div className="comparison-row1" >
          <div className="factor" ></div>
          <div className="evoke zindex"></div>
          <div className="others" ></div>
        </div>
      </div>
    </div>

  );
};

export default ComparisonCard;
