BEGIN TRANSACTION;

DROP TABLE IF EXISTS users, transactions, documents, itemized_fees;
DROP SEQUENCE IF EXISTS seq_document_id, seq_fee_id;

CREATE SEQUENCE seq_document_id
  INCREMENT BY 1
  START WITH 100
  NO MAXVALUE;

CREATE SEQUENCE seq_fee_id
  INCREMENT BY 1
  START WITH 200
  NO MAXVALUE;

CREATE TABLE users (
	user_id varchar(50) NOT NULL,
	username varchar(20) UNIQUE NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(20),
	CONSTRAINT PK_user_id PRIMARY KEY (user_id),
	CONSTRAINT UQ_username UNIQUE (username)
);

CREATE TABLE transactions (
	transaction_id varchar(50) NOT NULL,
	user_id varchar(50) NOT NULL,
	grand_total decimal(13, 2) NOT NULL,
	CONSTRAINT PK_transaction_id PRIMARY KEY (transaction_id),
	CONSTRAINT FK_transaction_user FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE documents (
	document_id int NOT NULL DEFAULT nextval('seq_document_id'),
	transaction_id varchar(50) NOT NULL,
	document_type varchar(30) NOT NULL,
	page_count int NOT NULL,
	erecording boolean NOT NULL,
	total decimal(13, 2) NOT NULL,
	CONSTRAINT PK_document_id PRIMARY KEY (document_id),
	CONSTRAINT FK_transaction_id FOREIGN KEY (transaction_id) REFERENCES transactions (transaction_id),
	CONSTRAINT CK_total_gt_0 CHECK (total > 0)
);

CREATE TABLE itemized_fees (
	fee_id int NOT NULL DEFAULT nextval('seq_fee_id'),
	document_id int NOT NULL,
	fee_type varchar(20) NOT NULL,
	amount decimal(13, 2) NOT NULL,
	CONSTRAINT PK_fee PRIMARY KEY (fee_id),
	CONSTRAINT FK_document_id FOREIGN KEY (document_id) REFERENCES documents (document_id),
	CONSTRAINT CK_fee_gt_0 CHECK (amount > 0)
);

COMMIT;

ROLLBACK;