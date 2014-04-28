/**
 * Copyright (c) 2010 Abbcc Corp.
 * No 225,Wen Yi RD, Hang Zhou, Zhe Jiang, China.
 * All rights reserved.
 *
 * "AdminService.java is the copyrighted,
 * proprietary property of Abbcc Company and its
 * subsidiaries and affiliates which retain all right, title and interest
 * therein."
 * 
 * Revision History
 *
 * Date              Programmer                   Notes
 * ---------    ---------------------  --------------------------------------------
 * 2009-12-9           wangjin                      initial
 **/

package com.abbcc.service;

import java.io.Serializable;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;

import com.abbcc.common.PaginationSupport;
import com.abbcc.models.AbcCustom;

/**
 * *AdminService.java
 */
public interface CustomService extends BaseService {
	public void save(AbcCustom transientInstance);

	public List<AbcCustom> findByHql(String hql);

	public void delete(AbcCustom persistentInstance);

	public AbcCustom findById(String id);

	public List<AbcCustom> findByExample(AbcCustom instance);

	public List<AbcCustom> findAll();

	public void saveOrUpdate(AbcCustom instance);

	public void update(AbcCustom instance);

	public void load(AbcCustom entity, Serializable id);

	public int updateColumn(Serializable id, String column, String value);

	public PaginationSupport findPageByCriteria(
			DetachedCriteria detachedCriteria);

	public PaginationSupport findPageByCriteria(
			DetachedCriteria detachedCriteria, int startIndex);

	public PaginationSupport findPageByCriteria(
			DetachedCriteria detachedCriteria, int pageSize, int startIndex);

	public List findAllByCriteria(DetachedCriteria detachedCriteria);

	public int getCountByCriteria(DetachedCriteria detachedCriteria);

	public void callProcedure(String procString, List<Object> params)
			throws Exception;

	public List getCallProcedureResult(String procString, List<Object> params)
			throws Exception;
}