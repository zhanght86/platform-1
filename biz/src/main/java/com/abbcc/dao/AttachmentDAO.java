/**
 * Copyright (c) 2010 Abbcc Corp.
 * No 225,Wen Yi RD, Hang Zhou, Zhe Jiang, China.
 * All rights reserved.
 *
 * "df.java is the copyrighted,
 * proprietary property of Abbcc Company and its
 * subsidiaries and affiliates which retain all right, title and interest
 * therein."
 * 
 * Revision History
 *
 * Date              Programmer                   Notes
 * ---------    ---------------------  --------------------------------------------
 * 2009-12-7           wangjin                      initial
*/
package com.abbcc.dao;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;

import com.abbcc.common.PaginationSupport;
import com.abbcc.models.AbcAttachment;

public interface AttachmentDAO {
	public void save(AbcAttachment transientInstance);

	public void delete(AbcAttachment persistentInstance);

	public AbcAttachment findById(String id);
	

	public List<AbcAttachment> findByExample(AbcAttachment instance);

	public List<AbcAttachment> findAll();

	public void saveOrUpdate(AbcAttachment instance);

	public PaginationSupport findPageByCriteria(
			final DetachedCriteria detachedCriteria);

	public PaginationSupport findPageByCriteria(
			final DetachedCriteria detachedCriteria, final int startIndex);

	public PaginationSupport findPageByCriteria(
			final DetachedCriteria detachedCriteria, final int pageSize,
			final int startIndex);

	public List findAllByCriteria(final DetachedCriteria detachedCriteria);

	public int getCountByCriteria(final DetachedCriteria detachedCriteria);

	public void callProcedure(String procString, List<Object> params)
			throws Exception;

	public List getCallProcedureResult(String procString, List<Object> params)
			throws Exception;

}
