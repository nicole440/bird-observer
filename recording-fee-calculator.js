        const baseFee = docType => {
            if (docType === "Deed") {
                return 70.25;
            } else if (docType === "Power of Attorney") {
                return 18.50;
            } else { return 68.50;
                }
        }

    // Function which determines the total fee based on base fee and page count
        const additionalPageFees = pageCount => {
            let overFour = 0;
            if (pageCount > 4) {
                overFour = pageCount -= 4;
                return overFour *= 2;
            }
        }

    // Function which asks whether "fee" is truthy; if so, 4.75 e-recording fee is returned
        const eFile = fee => fee ? 4.75 : 0;

    // High-order function which returns other functions as parameters
        const totalCharges = (baseFee, additionalPageFees, eFile) => {
            return (baseFee + additionalPageFees + eFile);
        }
        
