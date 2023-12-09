import { LogInWithAnonAadhaar, useAnonAadhaar } from 'anon-aadhaar-react';
import React, { useEffect, useState } from 'react';
import { AnonAadhaarPCD, exportCallDataGroth16FromPCD } from 'anon-aadhaar-pcd';

const LoginButton = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const [pcd, setPcd] = useState();

  useEffect(() => {
    if (anonAadhaar.status === 'logged-in') setPcd(anonAadhaar.pcd);
  }, [anonAadhaar]);

  const sendVote = async (_pcd) => {
    const { a, b, c, Input } = await exportCallDataGroth16FromPCD(_pcd);
  };

  return (
    <>
      <div className='d-flex justify-content-between'>
        <LogInWithAnonAadhaar />
        {anonAadhaar?.status === 'logged-in' && (
          <>
            <button className='claim-free-trial-button' onClick={() => sendVote(anonAadhaar?.pcd)}>Claim</button>
          </>
        )}
      </div>
    </>
  );
};

export default LoginButton;
