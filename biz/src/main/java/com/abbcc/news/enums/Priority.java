/**
 * Copyright (c) 2010 Abbcc Corp.
 * No 225,Wen Yi RD, Hang Zhou, Zhe Jiang, China.
 * All rights reserved.
 *
 * "Priority.java is the copyrighted,
 * proprietary property of Abbcc Company and its
 * subsidiaries and affiliates which retain all right, title and interest
 * therein."
 * 
 * Revision History
 *
 * Date              Programmer                   Notes
 * ---------    ---------------------  --------------------------------------------
 * 2010-6-12           baowp                      initial
 */

package com.abbcc.news.enums;

public enum Priority {

	normal("普通"), top("置顶");
	
	private String value;

	private Priority(String v) {
		value = v;
	}

	public String toString() {
		return value;
	}
}
