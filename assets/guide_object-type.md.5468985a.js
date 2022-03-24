import{_ as n,c as s,o as a,a as p}from"./app.7bb83f59.js";const y='{"title":"Object schema type","description":"","frontmatter":{},"headers":[{"level":2,"title":"ObjectType","slug":"objecttype"},{"level":2,"title":"Nested object.","slug":"nested-object"}],"relativePath":"guide/object-type.md"}',t={},o=p(`<h1 id="object-schema-type" tabindex="-1">Object schema type <a class="header-anchor" href="#object-schema-type" aria-hidden="true">#</a></h1><p>Schema package have a Object schema type, to validate object structures.</p><p>Object have properties, and properties can be of any type, including <code>ObjectType</code>.</p><h2 id="objecttype" tabindex="-1">ObjectType <a class="header-anchor" href="#objecttype" aria-hidden="true">#</a></h2><p>The code below creates a validation schema for a <code>User</code> class object.</p><div class="language-typescript"><pre><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ObjectType</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token function">NumberType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> validation <span class="token operator">=</span> <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Sublime&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">&#39;schema@websublime.com&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>isValid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>age<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>age<span class="token punctuation">.</span>isValid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>email<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>email<span class="token punctuation">.</span>isValid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Example of an invalid model.</p><div class="language-typescript"><pre><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ObjectType</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token function">NumberType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> validation <span class="token operator">=</span> <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Kid&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">&#39;I do not have email yet&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>isValid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// the errors are at property level</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>age<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>ageError<span class="token punctuation">]</span> <span class="token operator">=</span> validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>age<span class="token punctuation">.</span>errors<span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ageError<span class="token punctuation">.</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERRORS.NUMBER.MIN</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ageError<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// age</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>email<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>emailError<span class="token punctuation">]</span> <span class="token operator">=</span> validation<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>email<span class="token punctuation">.</span>errors<span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emailError<span class="token punctuation">.</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERRORS.STRING.IS_EMAIL</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emailError<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// email</span>
</code></pre></div><h2 id="nested-object" tabindex="-1">Nested object. <a class="header-anchor" href="#nested-object" aria-hidden="true">#</a></h2><p>Example of a nested object validation.</p><div class="language-typescript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  weight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Profile<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  profile<span class="token operator">:</span> Profile<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> profile <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">}</span> <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>profile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Profile</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ObjectType</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token function">StringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  profile<span class="token operator">:</span> <span class="token generic-function"><span class="token function">ObjectType</span><span class="token generic class-name"><span class="token operator">&lt;</span>Profile<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token function">NumberType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token function">NumberType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    weight<span class="token operator">:</span> <span class="token function">NumberType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> validation <span class="token operator">=</span> <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Sublime&#39;</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">&#39;schema@websublime.com&#39;</span><span class="token punctuation">,</span>
    profile<span class="token operator">:</span> <span class="token punctuation">{</span>
      age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token number">175</span><span class="token punctuation">,</span>
      weight<span class="token operator">:</span> <span class="token number">75</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>isValid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">expect</span><span class="token punctuation">(</span>validation<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// the errors are at property level</span>
</code></pre></div><p>Let&#39;s see the validation object in case of an error.</p><div class="language-typescript"><pre><code><span class="token comment">// ...</span>
validation <span class="token operator">=</span> <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    email<span class="token operator">:</span> <span class="token string">&#39;schema@websublime.com&#39;</span><span class="token punctuation">,</span>
    profile<span class="token operator">:</span> <span class="token punctuation">{</span>
      age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token number">175</span><span class="token punctuation">,</span>
      weight<span class="token operator">:</span> <span class="token number">125</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>validation<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>JSON ouput of the validation object:</p><div class="language-JSON"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// key in the context of the object</span>
          <span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;i18n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ERRORS.IS_REQUIRED&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;profile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Object Profile don&#39;t hold errors.</span>
      <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Object Profile not valid.</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;weight&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;constraints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">120</span>  <span class="token comment">// Error model have a constraint</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>            <span class="token comment">// object showing the validation contraint.</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>
              <span class="token property">&quot;i18n&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ERRORS.NUMBER.MAX&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;hasError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;isValid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
